import { contextBridge, ipcRenderer } from 'electron';
import { Channels, ReportConfig } from 'shared-local';

const electronHandler = {
  ipcRenderer: {
    testSend(channel: Channels, arg: ReportConfig) {
      ipcRenderer.send(channel, arg);
    },
    // sendMessage(channel: Channels, args: unknown[]) {
    //   ipcRenderer.send(channel, args);
    // },
    // on(channel: Channels, func: (...args: unknown[]) => void) {
    //   const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
    //     func(...args);
    //   ipcRenderer.on(channel, subscription);

    //   return () => {
    //     ipcRenderer.removeListener(channel, subscription);
    //   };
    // },
    // once(channel: Channels, func: (...args: unknown[]) => void) {
    //   ipcRenderer.once(channel, (_event, ...args) => func(...args));
    // },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
