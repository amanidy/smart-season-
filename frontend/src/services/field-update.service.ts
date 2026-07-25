import { apiFetch } from "./api";

import {
  CreateFieldUpdateDto,
  FieldUpdate,
} from "@/types/field-update";

export const fieldUpdateService = {
  getByField(fieldId: string) {
    return apiFetch<FieldUpdate[]>(
      `/fields/${fieldId}/updates`
    );
  },

  create(data: CreateFieldUpdateDto) {
    return apiFetch<FieldUpdate>(
      "/field-updates",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  },
};