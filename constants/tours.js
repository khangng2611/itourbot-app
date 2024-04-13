import { COLORS } from './theme';

const TOUR_STATUSES = {
  picking: { text: 'Going to your station', color: COLORS.yellow, background: COLORS.lightyellow },
  leading: { text: 'Going to the destination', color: COLORS.yellow, background: COLORS.lightyellow },
  canceled: { text: 'Canceled', color: COLORS.red, background: COLORS.lightred },
  done: { text: 'Arrived at the destination', color: COLORS.green, background: COLORS.lightgreen },
};

const TOUR_STAGE = {
  idle: -1,   // allow bot to be idle
  cancel: 0,  // allow bot to stop 
  pickup: 1,   // allow bot to go to pickup station
  destination: 2, // allow bot go to destination
}

export { TOUR_STATUSES, TOUR_STAGE }
