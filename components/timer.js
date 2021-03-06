import { MdGroup, MdAccessTime } from 'react-icons/md'
import { useState, Fragment } from 'react'
import useTimer from './useTimer'
import Field from './Field'
import Input from './Input'
import Button from './Button'
import Card from './Card'
import Rules from './Rules'
import Alarm from './Alarm'

export default () => {
  const [participants, setParticipants] = useState(5)
  const [wages, setWages] = useState(500)
  const {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime,
    isOvertime,
    endMeeting,
    setEndMeeting,
    alarm,
    setAlarm
  } = useTimer()

  const timeFormat = (s = elapsedTime) => {
    const pad = (n, z = 2) => ('00' + n).slice(-z)
    return pad(s / 3.6e6 | 0) + ':' + pad((s % 3.6e6) / 6e4 | 0) + ':' + pad((s % 6e4) / 1000 | 0)
  }

  const estimatedCost = () => {
    const ratePerSecond = wages / 3600
    const seconds = elapsedTime / 1000
    return Math.round((ratePerSecond * seconds) * participants) + ' kr'
  }

  const clearTimer = () => {
    setIsRunning(false)
    setElapsedTime(false)
  }

  return (
    <div>
      { !isRunning
        ? <Fragment>
          <Rules />
          <Card name='TIDSTYV' style={{ marginTop: '10px' }}>
            <p />
            <Field name='Møtedeltakere' description='Antall møtedeltakere'>
              <Input
                type='number'
                name='Antall møtedeltakere'
                autoFocus
                min='1'
                max='100'
                value={participants}
                onChange={({ target: { value } }) => setParticipants(value)}
              />
            </Field>
            <Field name='Timelønn' description='Snitt av timelønn i kroner'>
              <Input
                name='Snitt timelønn'
                type='number'
                value={wages}
                onChange={({ target: { value } }) => setWages(value)}
              />
            </Field>
            <Field name='Møteslutt' description='Sett en møteslutt for å bli varslet'>
              <Input
                name='Møteslutt tid'
                type='text'
                value={endMeeting}
                onChange={({ target: { value } }) => setEndMeeting(value)}
              />
            </Field>
            <Button
              value='Start'
              onClick={() => setIsRunning(true)}
            />
          </Card>
        </Fragment>
        : <Card name='MØTE PÅGÅR' style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '12px', color: '#757575' }}>
            <i><MdGroup /> Møtedeltakere: {participants} | <MdAccessTime /> Møteslutt: {endMeeting}</i>
          </p>
          <p style={{ fontSize: '30px', fontFamily: 'monospace' }}>{elapsedTime && timeFormat()}
            <Alarm alarm={alarm} setAlarm={setAlarm} />
          </p>
          <p>Dette møtet har kostet <b>{elapsedTime && estimatedCost()}</b> hittil.</p>
          { isOvertime && <p>MØTET ER OVER</p> }
          <Button
            value='Start på nytt'
            onClick={() => clearTimer()}
          />
        </Card>
      }
    </div>
  )
}
