# Welcome to the Station Manager!

## Development

To run your Remix app locally, make sure your project's local dependencies are
installed:

```sh
npm install
```

Afterwards, start server like so:

```sh
npm run dev
```

## Example

Find this project running [here](https://roadsurfer.vercel.app/)

## Explanations

Here's no state manager used as my state reflects the server state. So all data
are served via SSR and pageloads.

The autocomplete filters for the station names and provides an dropdown with
links to the specific filtered page. If there's no station selected vial the
autocomplete I render all bookings into the calendar.

I saw that I should display the name of the station. Currently this information
is not accessible on the detail page. We could make one more request to get this
information but I'm kinda running out of time so I just leave it like it is.

Error handling is nothing really in place as the API doesn't provide any
information on how an error can happen and in which shape. Ususally that's no
excuse to add basic error handling to not crash the website but again I'm
running out of time here.

CSS is done with Tailwind and is quite okay-ish for now. I'm not 100% happy with
the calendar view but it suits the case quite well.

Be aware that most of the data returned by the API ending somewhere in 2021. So
I have a fake date inside the code. Just comment it in to get lot more data.

I would like to have some E2E tests in place written in Cypress or Playwright.
