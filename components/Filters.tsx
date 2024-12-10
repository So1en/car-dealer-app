import React from 'react';
import { Card } from '@/components/ui/card';

import { getAllCars } from '@/app/utils';
import { generateYearOptions } from '@/app/helpers';
import FilterForm from '@/components/FilterForm';

const Filters = async () => {
  const cars = await getAllCars();
  const years = generateYearOptions();

  return (
    <Card className="mb-5 ">
      <FilterForm cars={cars.Results} years={years} />
    </Card>
  );
};
export default Filters;
