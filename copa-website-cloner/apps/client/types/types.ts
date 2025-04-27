export interface CloneRequest {
  url: string;
  additionalData: string;
}

export interface CloneResult {
  success: boolean;
  message: string;
  data?: any;
}
