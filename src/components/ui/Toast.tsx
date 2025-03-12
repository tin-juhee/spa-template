import { useEffect } from 'react';

import * as ToastPrimitive from '@radix-ui/react-toast';

import { ALERT_CLOSE_TIMEOUT } from '@/constants/magicNumbers';
import { cn } from '@/lib/utils';
import { useAlertStore } from '@/stores/useToastStore';

const Toast = () => {
  const { message, type, isOpen, closeAlert } = useAlertStore();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => closeAlert(), ALERT_CLOSE_TIMEOUT);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, closeAlert]);

  return (
    <ToastPrimitive.Provider>
      <ToastPrimitive.Root
        open={isOpen}
        onOpenChange={closeAlert}
        className={cn('fixed top-20 right-4 w-[340px] max-w-sm text-white px-4 py-3 rounded-md shadow-md', {
          'bg-green-400': type === 'success',
          'bg-red-400': type === 'error',
          'bg-yellow-400': type === 'warning',
        })}
      >
        <ToastPrimitive.Title>{message}</ToastPrimitive.Title>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className='fixed top-20 right-4 flex flex-col gap-2 p-4 w-full max-w-sm' />
    </ToastPrimitive.Provider>
  );
};

export default Toast;
