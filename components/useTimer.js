import { useState, useEffect } from 'react'

export default (endMeeting) => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState()
  const [isOvertime, setIsOvertime] = useState(false)

  // TODO: Fix bug - endMeeting is kept when starting over
  const isRunningLate = () => {
    if (isRunning && !isOvertime) {
      const stripTime = time => time.split(':').map(Number)
      const [ endH, endM ] = stripTime(endMeeting)
      const [ nowH, nowM ] = [ new Date().getHours(), new Date().getMinutes() ]
      console.log(`${nowH}:${nowM} > ${endH}:${endM}`)
      if (nowH > endH || (nowH === endH && nowM >= endM)) setIsOvertime(!isOvertime)
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
    isOvertime
  }
}
