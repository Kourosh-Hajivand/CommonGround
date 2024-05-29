import * as DateUtils from './DateUtils';

describe('DateUtils', () => {
  describe('toEmailConfirmation', () => {
    it('should return a string in the expected format when passed a valid date object', () => {
      const date = new Date('2022-01-01T12:34:56');
      const result = DateUtils.toEmailConfirmation(date);
      expect(result).toBe('Saturday, January 1st 2022 @ 12:34pm');
    });
  });

  describe('isDateOlderThan19', () => {
    it('should return true when the given date is older than 19 years', () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 20);
      expect(DateUtils.isDateOlderThan19(date.toISOString())).toBe(true);
    });

    it('should return false when the given date is not older than 19 years', () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 18);
      expect(DateUtils.isDateOlderThan19(date.toISOString())).toBe(false);
    });

    it('should return false when the given date is exactly 19 years ago', () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 19);
      expect(DateUtils.isDateOlderThan19(date.toISOString())).toBe(false);
    });

    it('should return false when the given date is exactly 19 years and 1 day future', () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() - 19);
      date.setDate(date.getDate() + 1);
      expect(DateUtils.isDateOlderThan19(date.toISOString())).toBe(false);
    });

    it('should return false when the given date is in the future', () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      expect(DateUtils.isDateOlderThan19(date.toISOString())).toBe(false);
    });
  });
});
