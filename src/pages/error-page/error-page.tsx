import { Button } from '@/components/ui';

export const ErrorPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center  text-2xl">
      <p>Oops, something happened</p>

      <Button onClick={() => window.location.reload()} className="mt-2">
        Refresh
      </Button>
    </div>
  );
};
