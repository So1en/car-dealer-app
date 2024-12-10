import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CarModel } from '@/types/CarModel';

const CarCard = ({ Model_ID, Model_Name, Make_Name, Make_ID }: CarModel) => {
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{Model_Name}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {Make_Name}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2 text-sm">
          <div>
            <span className="font-semibold">Make ID:</span> {Make_ID}
          </div>
          <div>
            <span className="font-semibold">Model ID:</span> {Model_ID}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
