import {ActionFunction, json} from 'remix'

export type Station = {id: string; name: string}

export type Error = {
  message: string
}

export type SearchResponse =
  | {type: 'stations'; stations: Station[]}
  | {error: Error; type: 'error'}

export const action: ActionFunction = async ({request}) => {
  const name = (await (await request.formData()).get('name')) as string

  if (name === '') {
    return json({status: 204})
  }

  const searchParams = new URLSearchParams({
    name,
  }).toString()

  const url = new URL('https://605c94c36d85de00170da8b4.mockapi.io/stations')
  url.search = searchParams

  try {
    const response = await fetch(url.toString())
    console.log({response})
    const stations: Station[] = await response.json()
    return json({stations, type: 'stations'}, {status: 200})
  } catch (error) {
    return json({error: (error as Error).message, type: 'error'})
  }
}
