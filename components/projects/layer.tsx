interface LayerProps extends React.HTMLAttributes<HTMLDivElement> {
  z: number;
  img: string;
}

export default function Layer({
  z,
  children,
  className,
  style,
  img,
  ...rest
}: LayerProps) {
  return (
    <div
      className={
        " w-full h-full bg-center bg-no-repeat bg-cover " +
        (className ?? "")
      }
      style={{
        transform: `translateZ(${z}px)`,
        backgroundImage: `url("${img}")`,
        scale: `${1 - z}`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
