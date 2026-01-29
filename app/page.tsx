import ExperienceSection from "@/components/ExperienceSection";
import GithubSection from "@/components/GithubSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import TagsSection from "@/components/TagsSection";
import WakaTimeSection from "@/components/WakaTimeSection";
import config from "@/configs";

export default function Page() {
  return (
    <div className="flex flex-row pt-12 justify-center">
      <div className="max-w-[1024px] flex flex-row w-[80%]">
        {/* 个人信息区域 */}
        <div className="p-3 flex flex-col gap-1 max-w-[300px] w-fit">
          <HeroSection profile={config.profile} />
          <TagsSection tags={config.profile.tags || []} />
          <SkillsSection skills={config.profile.skills || []} />
          <ExperienceSection experiences={config.profile.experiences || []} />
        </div>
        {/* 个人项目区域 */}
        <div className="flex-1 flex flex-col gap-2">
          <GithubSection />
          <WakaTimeSection />
        </div>
      </div>
    </div>
  );
}
