// Type definitions for notebook NUI
export interface NuiMessage<T = any> {
  action: string;
  data?: T;
}

export interface NuiCallbackResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}
