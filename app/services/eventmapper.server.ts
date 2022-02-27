import {Data, Event, Booking} from '~/routes/stationmanager'

// please don't rely on it. Better generate random colors
const colorMap: Record<string, string> = {
  '1': '#800000',
  '2': '#9A6324',
  '3': '#808000',
  '4': '#469990',
  '5': '#000075',
  '6': '#aaffc3',
}

const isBooking = (station: any): station is Booking[] =>
  (station[0] as Booking).startDate !== undefined

export const mapEvents = (data: Data): Event[] => {
  if (isBooking(data)) {
    return data.map(booking => ({
      id: booking.id,
      customerName: booking.customerName,
      start: booking.startDate,
      end: booking.endDate,
      url: `stationmanager/${booking.pickupReturnStationId}/details/${booking.id}?station=${booking.pickupReturnStationId}`,
    }))
  }

  return data.flatMap(({bookings, id}) => {
    const events = bookings.map(booking => ({
      id: booking.id,
      customerName: booking.customerName,
      start: booking.startDate,
      end: booking.endDate,
      backgroundColor: colorMap[id],
      url: `/stationmanager/${booking.pickupReturnStationId}/details/${booking.id}`,
    }))
    return events
  })
}
