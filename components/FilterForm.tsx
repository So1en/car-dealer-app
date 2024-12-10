'use client';

import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Car } from '@/types/Car';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Option } from '@/types/Option';
import { useParams } from 'next/navigation';

const FilterForm = ({ cars, years }: { cars: Car[]; years: Option[] }) => {
  const [formData, setFormData] = useState<{ car: string; year: string }>({
    car: '',
    year: '',
  });

  const { makeId, year } = useParams<{ makeId: string; year: string }>();
  console.log(makeId, year);

  const isNextDisabled = Boolean(!formData.car || !formData.year);

  useEffect(() => {
    if (makeId && year) setFormData({ car: makeId, year });
  }, [makeId, year]);

  return (
    <div className="flex flex-wrap items-center min-h-28 p-8 gap-2">
      <Select
        name="car"
        defaultValue={makeId}
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, car: value }))
        }
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a car" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cars</SelectLabel>
            {cars.map((car: Car) => (
              <SelectItem key={car.MakeName} value={car.MakeId.toString()}>
                {car.MakeName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        name="year"
        defaultValue={year}
        onValueChange={(value) =>
          setFormData((prev) => ({ ...prev, year: value }))
        }
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Years</SelectLabel>
            {years.map((year) => (
              <SelectItem key={year.label} value={year.value}>
                {year.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button className="ml-auto" disabled={isNextDisabled}>
        <Link href={`/result/${formData.car}/${formData.year}`}>Next</Link>
      </Button>
    </div>
  );
};
export default FilterForm;
