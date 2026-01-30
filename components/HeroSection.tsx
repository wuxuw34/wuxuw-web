import Image from "next/image";

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="card flex flex-col gap-3 items-center">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={100}
        height={100}
        className="rounded-full border border-white cursor-pointer animate-spin"
        style={{
          animationDuration: "10s",
        }}
      />
      <div className="text-2xl font-bold">{profile.name}</div>
      <div className="flex flex-col items-start gap-3 w-full text-shadow-lg">
        <div>
          <span className="text-blue-400">前端</span> 开发工程师
        </div>
        <div>
          <span className="text-blue-400">
            {new Date().getFullYear() -
              new Date(profile.birthday).getFullYear()}{" "}
          </span>
          years old
        </div>
        <div>
          <span className="text-blue-400">{profile.workExperience} </span>
          work experience
        </div>
        <div>
          <span className="text-blue-400">
            {profile.sex === "male" ? "男" : "女"}{" "}
          </span>
          {profile.location}
        </div>
        <div className="skills flex flex-row gap-2 items-center w-full justify-center">
          {profile.socials?.map((social) => {
            return (
              <a
                key={social.type}
                href={social.url}
                target="_blank"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    social.icon
                      ? social.icon
                      : `https://skillicons.dev/icons?i=${social.type}&theme=light`
                  }
                  width={32}
                  height={32}
                  alt={social.type}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
