import {useFetcher} from 'remix'
import * as React from 'react'
import {SearchResponse} from '~/routes/search'

export function Autocomplete() {
  const autocomplete = useFetcher<SearchResponse>()
  const ref = React.useRef<HTMLFormElement>(null)

  return (
    <autocomplete.Form ref={ref} method="post" action="/search">
      <div className="relative md:mx-auto md:w-1/3">
        <input
          type="text"
          name="name"
          className="w-full rounded-lg p-4"
          placeholder="search"
          autoComplete="off"
          onChange={event =>
            autocomplete.submit(
              {name: event.target.value},
              {method: 'post', action: '/search'},
            )
          }
        />
        {autocomplete?.data?.type === 'stations' ? (
          <div className="absolute z-10 w-full divide-y-2 rounded-lg bg-white drop-shadow">
            {autocomplete?.data.stations.map(item => (
              <div className="w-full p-2 hover:bg-slate-100">{item.name}</div>
            ))}
          </div>
        ) : autocomplete?.data?.type === 'error' ? (
          <p className="text-sm text-red-400">
            {autocomplete.data?.error.message}
          </p>
        ) : null}
      </div>
    </autocomplete.Form>
  )
}
