import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const FilterSkeleton = () => {
  return (
    <div className="flex flex-wrap items-center mb-5 min-h-28 p-8 gap-2">
      <Skeleton className="h-10 w-[280px] rounded-md" />
      <Skeleton className="h-10 w-[280px] rounded-md" />
      <div className="ml-auto">
        <Skeleton className="h-10 w-[60px] rounded-md" />
      </div>
    </div>
  );
};
export default FilterSkeleton;
