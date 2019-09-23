import { Season } from './enum';

export default function getSeason(month: string): Season | null {
  switch (month) {
    case 'january':
    case 'february':
    case 'december':
      return Season.Summer;

    case 'march':
    case 'april':
    case 'may':
      return Season.Autumn;
    case 'june':
    case 'july':
    case 'august':
      return Season.Winter;
    case 'september':
    case 'october':
    case 'november':
      return Season.Spring;
    default:
      return null;
  }
}
