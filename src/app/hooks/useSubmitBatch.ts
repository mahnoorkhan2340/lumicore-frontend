"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { NormalizedItem } from "../../../types";
import { API_ENDPOINTS } from "../lib/apiConfig";

export function useSubmitBatch(
  batch: string,
  onSuccess?: (score: number | null) => void
) {
  return useMutation({
    mutationFn: (items: NormalizedItem[]) =>
      axios.post(API_ENDPOINTS.SUBMIT, {
        candidate_name: "mahnoor",
        batch_id: batch,
        cleaned_items: items.filter((item) => item.is_valid !== false),
      }).then((res) => res.data),
      retry: 1,
    onSuccess: (data: any) => onSuccess?.(data.validation.score ?? null),
  });
}
