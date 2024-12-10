import { Option } from '@/types/Option';

export const generateYearOptions = (startYear = 2015): Option[] => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push({ label: year.toString(), value: year.toString() });
  }

  return years;
};
