import {json, LoaderFunction, Outlet, useLoaderData} from 'remix'
import {Autocomplete} from '~/components/autocomplete'
import {Calendar} from '~/components/calendar'
import {mapEvents} from '~/services/eventmapper.server'

export type Booking = {
  customerName: string
  endDate: string
  id: string
  pickupReturnStationId: string
  startDate: string
}

export type Station = {
  id: string
  bookings: Booking[]
}

export type Data = Station[] | Booking[]

export type Event = Pick<Booking, 'id' | 'customerName'> & {
  backgroundColor?: string
  start: string
  end: string
  url: string
}

export const loader: LoaderFunction = async ({request}) => {
  const id = new URL(request.url).searchParams.get('station')

  const url = id
    ? `https://605c94c36d85de00170da8b4.mockapi.io/stations/${id}/bookings`
    : 'https://605c94c36d85de00170da8b4.mockapi.io/stations/'

  try {
    const response = await fetch(url)

    if (!response.ok) {
      // probably should be better catched than that if the API returns something
      // not expected but since there's no api doc I leave it for now
      throw new Error('Network response was not OK')
    }

    const data: Data = await response.json()
    const events = mapEvents(data)
    return json(events, {status: 200})
  } catch (e) {
    console.error(e)

    return json(e, {status: 500})
  }
}

export default function Index() {
  const events = useLoaderData<Event[]>()

  return (
    <div>
      <Autocomplete />
      <Calendar events={events} />
      <Outlet />
    </div>
  )
}
