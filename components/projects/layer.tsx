interface LayerProps extends React.HTMLAttributes<HTMLDivElement> {
  z: number;
  img: string;
  perspective: number;
}

export default function Layer({
  z,
  children,
  className,
  style,
  perspective,
  img,
  ...rest
}: LayerProps) {
  return (
    <div
      className={
        " w-full h-full bg-center bg-fixed bg-no-repeat bg-cover " + (className ?? "")
      }
      style={{
        backgroundImage: `url("${img}")`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
