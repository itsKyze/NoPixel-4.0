// Shared TypeScript Definitions for dispatch
export interface ResourceConfig {
  debug?: boolean;
  version?: string;
}

export interface ServerCallback<T = any> {
  (response: T): void;
}
