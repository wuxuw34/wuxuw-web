"use client";
import { SetupWorker, setupWorker } from 'msw/browser';
import { handlers } from './handlers';

let mockWorker: SetupWorker | null = null;

export const createMockWorker = () => {
  return new Promise<SetupWorker | null>((resolve) => {
    if (!mockWorker) {
      mockWorker = setupWorker(...handlers);
      mockWorker.start({
        quiet: true
      }).then(() => {
        resolve(mockWorker);
      });
      return
    }

    resolve(mockWorker);
  });
}
