import {Alert} from 'react-native';
import {COLORS} from '../theme';

export const Errored = err => {
  if (err.request?.status) {
    console.log(err.request);
    let error = resolveStatusCode(err.request.status);
    if (error) Alert.alert('Error', error);
    else Alert.alert('Error', err.request._response);
  } else if (err.response?.status) {
    console.log(err.response);
    let error = resolveStatusCode(err.response.status);
    if (error) Alert.alert('Error', error);
    else Alert.alert('Error', err.response._response);
  } else {
    console.log(err);
    Alert.alert('Error', err.message);
  }
};

function resolveStatusCode(statusCode) {
  switch (statusCode) {
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 408:
      return 'Request Timeout';
    case 413:
      return 'Too Large Size (upload upto 10MB)';
    case 415:
      return 'Unsupported Media Type';
    case 429:
      return 'Too Many Requests';
    case 502:
      return 'Bad Gateway';
    case 503:
      return 'Service Unavailable';
    case 504:
      return 'Gateway Timeout';
    case 511:
      return 'Network Authentication Required';
    default:
      return null;
  }
}

export function getDates(month, year) {
  const date = new Date(`${year}-${month}-01`);
  const dayOfWeek = date.getDay();
  const daysInMonth = getNumberOfDays(year, month);
  const monthDays = Array(daysInMonth)
    .fill()
    .map((_, i) => (i + 1).toString().padStart(2, '0'));

  // monday
  if (dayOfWeek == 1) {
    const trailingEmptyCells = Array(42 - monthDays.length).fill(null);
    return [...monthDays, ...trailingEmptyCells];
  }
  // tuesday
  if (dayOfWeek == 2) {
    const leadingEmptyCells = Array(1).fill(null);
    const trailingEmptyCells = Array(42 - 1 - monthDays.length).fill(null);
    return [...leadingEmptyCells, ...monthDays, ...trailingEmptyCells];
  }
  // wednesday
  if (dayOfWeek == 3) {
    const leadingEmptyCells = Array(2).fill(null);
    const trailingEmptyCells = Array(42 - 2 - monthDays.length).fill(null);
    return [...leadingEmptyCells, ...monthDays, ...trailingEmptyCells];
  }
  // thursday
  if (dayOfWeek == 4) {
    const leadingEmptyCells = Array(3).fill(null);
    const trailingEmptyCells = Array(42 - 3 - monthDays.length).fill(null);
    return [...leadingEmptyCells, ...monthDays, ...trailingEmptyCells];
  }
  // friday
  if (dayOfWeek == 5) {
    const leadingEmptyCells = Array(4).fill(null);
    const trailingEmptyCells = Array(42 - 4 - monthDays.length).fill(null);
    return [...leadingEmptyCells, ...monthDays, ...trailingEmptyCells];
  }
  // saturday
  if (dayOfWeek == 6) {
    const leadingEmptyCells = Array(5).fill(null);
    const trailingEmptyCells = Array(42 - 5 - monthDays.length).fill(null);
    return [...leadingEmptyCells, ...monthDays, ...trailingEmptyCells];
  }
  // sunday
  if (dayOfWeek == 0) {
    const leadingEmptyCells = Array(6).fill(null);
    const trailingEmptyCells = Array(42 - 6 - monthDays.length).fill(null);
    return [...leadingEmptyCells, ...monthDays, ...trailingEmptyCells];
  }
}

export function getNumberOfDays(year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}
export function isSelectedYear(selectedYear, i) {
  return selectedYear == new Date().getFullYear() + i;
}
export function dateColor(selectedDate, i) {
  if (selectedDate == i) return COLORS.white;
  else return COLORS.black;
}
