import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import {Event} from '~/routes/stationmanager'
import {useNavigate} from 'remix'

// const fakeDate = new Date(2021, 2, 13)

type CalendarProps = {
  events: Event[]
}

export function Calendar({events}: CalendarProps) {
  const navigate = useNavigate()

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        // initialDate={fakeDate}
        events={events}
      />
    </div>
  )
}
