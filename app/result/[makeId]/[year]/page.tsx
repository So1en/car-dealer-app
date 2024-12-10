import React, { Suspense } from 'react';
import { getAllCars, getModalsByFilter } from '@/app/utils';
import { generateYearOptions } from '@/app/helpers';
import { Car } from '@/types/Car';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CarCard from '@/components/CarCard';
import { CarModel } from '@/types/CarModel';
import { Badge } from '@/components/ui/badge';
import Loading from '@/app/result/[makeId]/[year]/loading';

export async function generateStaticParams() {
  const cars = await getAllCars();
  const years = generateYearOptions();

  const paths = cars.Results.flatMap((car: Car) =>
    years.map((year) => ({
      makeId: car.MakeId.toString(),
      year: year.value,
    })),
  );
  console.log(paths);
  return paths.map(({ makeId, year }: { makeId: string; year: string }) => ({
    params: {
      makeId,
      year,
    },
  }));
}

const Page = async ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const { makeId, year } = await params;
  const selectedCars = await getModalsByFilter(makeId, year);
  console.log(selectedCars);
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Card className="w-full max-w-full mb-5 bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">
              {selectedCars.Results[0]?.Make_Name ?? ''}
            </CardTitle>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {year}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-sm opacity-90">Total models in list</div>
            <div className="text-4xl font-bold">{selectedCars.Count}</div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {selectedCars.Results.length > 0 &&
            selectedCars.Results.map((car: CarModel) => (
              <CarCard key={car.Model_ID} {...car} />
            ))}
        </div>
      </main>
    </Suspense>
  );
};
export default Page;
