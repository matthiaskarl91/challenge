import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import tailwindStyles from './styles/tailwind.css'
import globalStyles from './styles/global.css'
import type {MetaFunction} from 'remix'

export const meta: MetaFunction = () => {
  return {title: 'New Remix App'}
}

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: tailwindStyles},
    {rel: 'stylesheet', href: globalStyles},
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="bg-gray-200 p-4">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
