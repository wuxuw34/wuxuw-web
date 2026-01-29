const doroImage = "/doro.webp";

export default function Background() {
  return (
    <div
      className="fixed -z-10"
      style={{
        backgroundImage: `url(${doroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
