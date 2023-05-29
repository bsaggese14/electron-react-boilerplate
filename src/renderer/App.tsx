// import { storeTest } from '../main/electron-store/store';
import { Suspense, useEffect } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import './components/nav.css';
// import { useInitMyDb } from './indexedDB/init';
import './report-generation/generateReport';
import { db, useInitMyDb } from './indexedDB/init';
import { configsTestData } from './report-generation/utils';
import { Provider } from 'jotai';

export const App = () => {
  // local data example
  // const testDataName = 'testData5';
  // const previousStoredValue = window.localStorage.getItem(testDataName);
  // window.localStorage.setItem(
  //   testDataName,
  //   `${parseInt(previousStoredValue || '0') + 1}`
  // );
  // window.localStorage.setItem(testDataName, JSON.stringify(configsTestData));
  // const gottenData = JSON.parse(
  //   window.localStorage.getItem(testDataName) || ''
  // ) as ReportConfig[];
  // console.log('HW::', gottenData);
  useEffect(() => {
    useInitMyDb();
  }, []);

  return (
    <Provider>
      <Suspense fallback={'<Loader/>'}>
        <div className="App bg-light" style={{ textAlign: 'left' }}>
          <Nav />
          <Main />
        </div>
      </Suspense>
    </Provider>
  );
};

export default App;
