// Shared TypeScript Definitions for money-runs
export interface ResourceConfig {
  debug?: boolean;
  version?: string;
}

export interface ServerCallback<T = any> {
  (response: T): void;
}
