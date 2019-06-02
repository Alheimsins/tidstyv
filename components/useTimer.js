/* eslint-env browser */
import { useState, useEffect } from 'react'

export default () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState()
  const [isOvertime, setIsOvertime] = useState(false)
  const [alarm, setAlarm] = useState(true)
  let hour = new Date().toLocaleTimeString('en-GB').slice(0, 2)
  const [endMeeting, setEndMeeting] = useState(`${hour.charAt(0) === 0 ? 0 : ''}${++hour}:45`)

  // TODO: This is so fugly.
  const isRunningLate = () => {
    const stripTime = time => time.split(':').map(Number)
    const [ endH, endM ] = stripTime(endMeeting)
    const [ nowH, nowM ] = [ new Date().getHours(), new Date().getMinutes() ]
    const runningLate = nowH > endH || (nowH === endH && nowM >= endM)
    if (runningLate !== isOvertime) setIsOvertime(runningLate)
    // TODO: fix alarm
    // new Audio('/static/air_horn.wav').play().catch(() => {})
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
    setEndMeeting,
    alarm,
    setAlarm
  }
}
