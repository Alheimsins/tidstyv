import { MdAlarmOn, MdAlarmOff } from 'react-icons/md'

export default ({ alarm, setAlarm }) => (
  <span style={{ verticalAlign: 'sub', cursor: 'pointer' }} onClick={() => setAlarm(!alarm)}>
    { alarm
      ? <span style={{ color: '#47E5BC' }}><MdAlarmOn /></span>
      : <span style={{ color: '#F47F97' }}><MdAlarmOff /></span>
    }
  </span>
)
