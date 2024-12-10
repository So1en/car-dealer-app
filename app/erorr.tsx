'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const Error = ({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-destructive/10 p-4">
      <div className="max-w-md w-full text-center">
        <AlertTriangle
          className="mx-auto mb-6 h-16 w-16 text-destructive"
          strokeWidth={1.5}
        />
        <h2 className="text-2xl font-bold text-destructive mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-muted-foreground mb-6">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => reset && reset()}
            variant="secondary"
            className="px-6"
          >
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
            className="px-6"
          >
            Go Home
          </Button>
        </div>
        {error?.digest && (
          <div className="mt-6 text-xs text-muted-foreground">
            Error ID: {error.digest}
          </div>
        )}
      </div>
    </div>
  );
};

export default Error;
