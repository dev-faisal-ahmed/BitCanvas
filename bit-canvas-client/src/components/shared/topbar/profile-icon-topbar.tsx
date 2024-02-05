import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type ProfileIconTopbarProps = {
  name: string;
  size?: number;
  className?: string;
  email: string;
};

export function ProfileIconTopbar({
  name,
  className,
  size = 40,
  email,
}: ProfileIconTopbarProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          style={{ width: `${size}px`, height: `${size}px` }}
          className={cn(
            'flex items-center justify-center rounded-full bg-primary-600 text-2xl font-semibold text-white',
            className,
          )}
        >
          {name[0]}
        </div>
      </PopoverTrigger>
      <PopoverContent align='end' className='w-fit min-w-40'>
        <div>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <p className='mb-2 border-b pb-1 text-sm text-muted-foreground'>
            {email}
          </p>
          <Button className='w-full'>Logout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
