interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

/**
 * 标签组件 
 * @returns 
 */
export default function Tag({ children, className, style, ...rest }: TagProps) {
  return (
    <div
      className={className}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
