export interface CreateFieldUpdateDto {
  fieldId: string;
  cropStage: string;
  notes: string;
  moisture?: number;
  temperature?: number;
  humidity?: number;
}

export interface FieldUpdate {
  id: string;
  fieldId: string;

  cropStage: string;
  notes: string;

  moisture?: number;
  temperature?: number;
  humidity?: number;

  createdAt: string;

  user: {
    id: string;
    fullName: string;
  };
}