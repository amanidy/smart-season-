import { apiFetch } from "./api";

import {
  CreateFieldDto,
  UpdateFieldDto,
  Field,
} from "@/types/field";

export const fieldService = {
  getAll() {
    return apiFetch<Field[]>("/fields");
  },

  getById(id: string) {
    return apiFetch<Field>(`/fields/${id}`);
  },

  create(data: CreateFieldDto) {
    return apiFetch<Field>("/fields", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  update(
    id: string,
    data: UpdateFieldDto
  ) {
    return apiFetch<Field>(`/fields/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  delete(id: string) {
    return apiFetch<void>(`/fields/${id}`, {
      method: "DELETE",
    });
  },
};