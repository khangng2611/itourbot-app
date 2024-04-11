import { COLORS } from './theme';

const tourStatuses = {
  picking: { text: 'Going to your station', color: COLORS.yellow, background: COLORS.lightyellow },
  leading: { text: 'Going to the destination', color: COLORS.yellow, background: COLORS.lightyellow },
  canceled: { text: 'Canceled', color: COLORS.red, background: COLORS.lightred },
  done: { text: 'Arrived at the destination', color: COLORS.green, background: COLORS.lightgreen },
};

export default tourStatuses;
