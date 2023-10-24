import React, { useEffect } from 'react';
import {AppUi} from './AppUi';
import { TodoProvider } from '../TodoContext';

function App() {
  return(
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App; //Solo estamos exportando el componente App
