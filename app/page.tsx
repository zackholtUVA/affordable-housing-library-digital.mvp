import { LaunchHeroSection } from "@/components/home/launch-hero";
import { AduDefinitionSection } from "@/components/home/adu-definition";
import { PageShell } from "@/components/layout/page-shell";

export default function HomePage() {
  return (
    <PageShell className="space-y-0">
      <LaunchHeroSection />
      <AduDefinitionSection />
    </PageShell>
  );
}
