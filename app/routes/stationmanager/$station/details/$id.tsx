import {json, LoaderFunction, useLoaderData} from 'remix'
import {Booking} from '../../../stationmanager'

export const loader: LoaderFunction = async ({params}) => {
  const response = await fetch(
    `https://605c94c36d85de00170da8b4.mockapi.io/stations/${params.station}/bookings/${params.id}`,
  )

  const booking: Booking = await response.json()
  return json(booking, {status: 200})
}

export default function Details() {
  const data = useLoaderData<Booking>()

  return (
    <>
      <button
        className="absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-50"
        onClick={() => history.back()}
      ></button>
      <aside className="absolute right-0 top-0 z-50 h-screen w-1/3 bg-white p-2 drop-shadow-xl">
        <h1 className="bold my-4 text-xl">{data.customerName}</h1>
        <ul>
          <li>
            start: {Intl.DateTimeFormat('de').format(new Date(data.startDate))}
          </li>
          <li>
            end: {Intl.DateTimeFormat('de').format(new Date(data.endDate))}
          </li>
          <li>Return to: {data.pickupReturnStationId}</li>
        </ul>
      </aside>
    </>
  )
}
