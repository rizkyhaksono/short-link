export interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    short_url: string;
    original_url: string;
    id: string;
    updated_at: string;
    created_at: string;
  }[]
}

export type SearchApiResponse = {
  success: boolean;
  message: string;
  data: {
    short_url: string;
    original_url: string;
    id: string;
    updated_at: string;
    created_at: string;
  }
}