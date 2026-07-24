import DashboardCard from "@/components/dashboard/DashboardCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentUpdates from "@/components/dashboard/RecentUpdates";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";

export default function DashboardPage() {
  return (
    <main>
      <WelcomeBanner />

      <section>
        <DashboardCard title="Fields" value={12} />

        <DashboardCard title="Healthy" value={9} />

        <DashboardCard title="Alerts" value={2} />

        <DashboardCard title="Harvested" value={1} />
      </section>

      <RecentUpdates />

      <QuickActions />
    </main>
  );
}