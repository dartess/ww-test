import { useState } from 'react';

import { Layout } from '@/core/Layout/Layout';
import { StoresContext, Stores } from '@/core/stores';
import './App.css';

export const App = () => {
  const [stores] = useState(() => new Stores());
  return (
    <StoresContext value={stores}>
      <Layout />
    </StoresContext>
  );
};
