import { useState, useEffect } from 'react'

export default () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState()
  const [isOvertime, setIsOvertime] = useState(false)
  let hour = new Date().toLocaleTimeString('en-GB').slice(0, 2)
  const [endMeeting, setEndMeeting] = useState(`${hour.charAt(0) === 0 ? 0 : ''}${++hour}:45`)

  // TODO: Fix bug - endMeeting is kept when starting over
  const isRunningLate = () => {
    if (isRunning) {
      const stripTime = time => time.split(':').map(Number)
      const [ endH, endM ] = stripTime(endMeeting)
      const [ nowH, nowM ] = [ new Date().getHours(), new Date().getMinutes() ]
      setIsOvertime(nowH > endH || (nowH === endH && nowM >= endM))
    }
  }

  useEffect(() => {
    let interval
    if (isRunning) {
      const startingTime = Date.now()
      interval = setInterval(() => { setElapsedTime(Date.now() - startingTime); isRunningLate() }, 1000)
    }
    return () => clearInterval(interval)
  },
  [isRunning]
  )

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime,
    isOvertime,
    endMeeting,
    setEndMeeting
  }
}
