import HeroSection from "@/components/HeroSection";
import config from "@/configs";

export default function Page() {
  return (
    <div>
      <HeroSection profile={config.profile} />
    </div>
  );
}
