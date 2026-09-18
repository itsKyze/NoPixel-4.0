// Shared TypeScript Definitions for np_4.0_fp_fov
export interface ResourceConfig {
  debug?: boolean;
  version?: string;
}

export interface ServerCallback<T = any> {
  (response: T): void;
}
