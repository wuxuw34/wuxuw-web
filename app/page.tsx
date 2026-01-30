import ExperienceSection from "@/components/ExperienceSection";
import GithubSection from "@/components/GithubSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TagsSection from "@/components/TagsSection";
import WakaTimeSection from "@/components/WakaTimeSection";
import config from "@/configs";

export default function Page() {
  return (
    <div className="flex max-w-6xl flex-col  lg:flex-row gap-3">
      {/* 个人信息区域 */}
      <div className="flex flex-col gap-2 lg:w-[300px] w-full">
        <HeroSection profile={config.profile} />
        <TagsSection tags={config.profile.tags || []} />
        <SkillsSection skills={config.profile.skills || []} />
        <ExperienceSection experiences={config.profile.experiences || []} />
      </div>
      {/* 个人项目区域 */}
      <div className="flex flex-1 flex-col gap-2">
        <GithubSection />
        <WakaTimeSection />
      </div>
    </div>
  );
}
