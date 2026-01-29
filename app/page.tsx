import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TagsSection from "@/components/TagsSection";
import config from "@/configs";

export default function Page() {
  return (
    <div className="p-3">
      <HeroSection profile={config.profile} />
      <TagsSection tags={config.profile.tags || []} />
      <SkillsSection skills={config.profile.skills || []} />
    </div>
  );
}
