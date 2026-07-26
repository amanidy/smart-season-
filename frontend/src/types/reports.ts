export interface ReportStatistics {
  totalFields: number;
  healthyFields: number;
  harvestedFields: number;
  activeAlerts: number;
}

export interface CropReportItem {
  id: string;
  crop: string;
  fields: number;
  averageAcreage: number;
}

export interface WeatherReportItem {
  date: string;
  rainfall: number;
  temperature: number;
}

export interface AgentReportItem {
  id: string;
  fullName: string;
  assignedFields: number;
  completedUpdates: number;
}

export interface ReportsResponse {
  statistics: ReportStatistics;
  crops: CropReportItem[];
  weather: WeatherReportItem[];
  agents: AgentReportItem[];
}