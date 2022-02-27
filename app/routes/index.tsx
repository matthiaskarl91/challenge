import {json, LoaderFunction, useLoaderData} from 'remix'
import {Autocomplete} from '~/components/autocomplete'
import {Calendar} from '~/components/calendar'

export const loader: LoaderFunction = async () => {
  try {
    const response = await fetch(
      'https://605c94c36d85de00170da8b4.mockapi.io/stations/1/bookings',
    )

    if (!response.ok) {
      // probably should be better catched than that if the API returns something
      // not expected but since there's no api doc I leave it for now
      throw new Error('Network response was not OK')
    }

    const data = await response.json()

    return json(data, {status: 200})
  } catch (e) {
    console.error(e)

    return json(e, {status: 500})
  }
}

export default function Index() {
  const data = useLoaderData()
  console.log({data})
  return (
    <div style={{fontFamily: 'system-ui, sans-serif', lineHeight: '1.4'}}>
      <Autocomplete />
      <Calendar />
    </div>
  )
}
