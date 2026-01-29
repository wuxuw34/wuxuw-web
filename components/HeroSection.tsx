interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="card">
      <h1>Hello World</h1>
      <div>
        <div>{profile.name}</div>
      </div>
    </section>
  );
}
