"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import API_ENDPOINTS from "../lib/apiConfig";
import { FetchResponse } from "../../../types";

export function useFetchBatch(
  batch: string,
  options?: UseQueryOptions<FetchResponse>
) {
  return useQuery<FetchResponse>({
    queryKey: ["fetchBatchData", batch],
    queryFn: async () => {
      const response = await axios.get(`${API_ENDPOINTS.FETCH}?batch=${batch}`);
      return { raw: response.data.records };
    },
    enabled: false,
    ...options,
  });
}
