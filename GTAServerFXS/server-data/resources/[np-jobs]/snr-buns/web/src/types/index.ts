// Type definitions for snr-buns NUI
export interface NuiMessage<T = any> {
  action: string;
  data?: T;
}

export interface NuiCallbackResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}
