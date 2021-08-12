/// <reference types="svelte" />

declare global {
  interface Window {
    __INITIAL_STATE__: any;
    app: any;
  }
}

export {};
