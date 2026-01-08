"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {  NormalizeResponse } from "../../../types";
import { API_ENDPOINTS } from "../lib/apiConfig";



export function useNormalizeData(
  onSuccess?: (data: NormalizeResponse) => void
) {
  return useMutation({
    mutationFn: (items: any[]) =>
      axios
        .post<NormalizeResponse>(API_ENDPOINTS.NORMALIZE, { items })
        .then((res) => res.data),
    onSuccess,
  });
}
