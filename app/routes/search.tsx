import {ActionFunction, json} from 'remix'

export type Customer = {
  id: string
  pickupReturnStationId: string
  customerName: string
  startDate: string
  endDate: string
}

export type Error = {
  message: string
}

export type SearchResponse =
  | {type: 'customer'; customers: Customer[]}
  | {error: Error; type: 'error'}

export const action: ActionFunction = async ({request}) => {
  const name = (await (await request.formData()).get('name')) as string

  if (name === '') {
    return json({status: 204})
  }

  const searchParams = new URLSearchParams({
    customerName: name,
  }).toString()

  const url = new URL(
    'https://605c94c36d85de00170da8b4.mockapi.io/stations/1/bookings',
  )
  url.search = searchParams

  try {
    const response = await fetch(url.toString())
    const customers: Customer[] = await response.json()
    return json({customers, type: 'customer'}, {status: 200})
  } catch (error) {
    return json({error: (error as Error).message, type: 'error'})
  }
}
