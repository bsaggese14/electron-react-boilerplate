import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// import { Channels, SupportedFactors } from 'shared-local';
// import { testGwiObjects, testVacationObjects } from './report-generation/utils';
// import { storeTest } from '../main/electron-store/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// example of how to send data through to main process
// window.electron.ipcRenderer.testSend(Channels.SAVE_CONFIG, {
//   id: '1',
//   name: 'myFirstReportConfig',
//   factors: [
//     {
//       name: SupportedFactors.GWI,
//       effectiveDate: new Date(),
//       gwiObjects: testGwiObjects,
//     },
//     { name: SupportedFactors.VACATION, vacationObjects: testVacationObjects },
//   ],
//   creationDate: 'yesterday',
// });
