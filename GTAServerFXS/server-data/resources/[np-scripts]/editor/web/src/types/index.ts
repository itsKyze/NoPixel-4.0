// Type definitions for editor NUI
export interface NuiMessage<T = any> {
  action: string;
  data?: T;
}

export interface NuiCallbackResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}
