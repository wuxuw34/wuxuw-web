import Image from "next/image";

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="card flex flex-col gap-3 items-center w-fit">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={100}
        height={100}
        className="rounded-full border border-white cursor-pointer "
      />
      <div>
        <div className="text-2xl font-bold">{profile.name}</div>
        <div className="text-lg ">{profile.title}</div>
        <div className="text-lg ">{profile.description}</div>
      </div>
    </section>
  );
}
