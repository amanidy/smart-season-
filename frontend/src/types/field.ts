export interface CreateFieldDto {
  name: string;
  crop: string;
  location: string;
  acreage: number;
  status: string;
  ownerId: string;
}

export interface UpdateFieldDto {
  name?: string;
  crop?: string;
  location?: string;
  acreage?: number;
  status?: string;
}

export interface Field {
  id: string;
  name: string;
  crop: string;
  location: string;
  acreage: number;
  status: string;
  ownerId: string;

  createdAt: string;
  updatedAt: string;
}