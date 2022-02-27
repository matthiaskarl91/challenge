import {Link} from 'react-router-dom'

export default function Index() {
  return (
    <div style={{fontFamily: 'system-ui, sans-serif', lineHeight: '1.4'}}>
      <Link to="/stationmanager">Station Manager</Link>
    </div>
  )
}
