export interface DashboardStats {
  totalFields: number;
  activeFields: number;
  totalAgents: number;
  activeAlerts: number;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface DashboardSummary {
  stats: DashboardStats;
  activities: Activity[];
}