import { LaunchHeroSection } from "@/components/home/launch-hero";
import { PageShell } from "@/components/layout/page-shell";

export default function HomePage() {
  return (
    <PageShell className="space-y-0">
      <LaunchHeroSection />
    </PageShell>
  );
}
