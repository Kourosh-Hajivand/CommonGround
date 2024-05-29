import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(weekday);
dayjs.extend(advancedFormat);

/**
 * Formats the given time to a string to be used for sending out confirmation emails
 * @param date
 */
export const toEmailConfirmation = (date: Date): string => {
  const day = dayjs(date);

  return `${day.format('dddd, MMMM Do YYYY')} @ ${day.format('h:mma')}`;
};

/**
 * Returns true if the given date is older than 19 years
 */
export const isDateOlderThan19 = (date: string): boolean => {
  return dayjs(date).isBefore(dayjs().subtract(19, 'years'));
};
