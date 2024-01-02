'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{}}>
      <ChakraProvider>{children}</ChakraProvider>
    </SWRConfig>
  );
}
