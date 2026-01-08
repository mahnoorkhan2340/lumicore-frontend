export interface RawData {
  [key: string]: any;
}

export interface NormalizedItem {
  doc_id: string | null;
  type: string | null;
  counterparty: string | null;
  project: string | null;
  expiry_date: string | null;
  amount: number | null;
  is_valid?: boolean;
}


export interface FetchResponse {
  raw: any[];
}

export interface NormalizeResponse {
  count_raw: number;
  count_deduped: number;
  items: NormalizedItem[];
}
