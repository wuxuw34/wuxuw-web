interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: "text" | "tel" | "email" | "number" | 'textarea' | "password";
}

const Input = ({
  className,
  startIcon,
  style,
  placeholder,
  endIcon,
  type = "text",
  ...rest
}: InputProps) => {
  return (
    <div
      className={[
        className,
        "card flex flex-row gap-2 items-center has-focus:shadow-[0_0_0px_1px_var(--color-blue-400)]",
      ].join(" ")}
      style={{
        ...style,
      }}
    >
      {startIcon}
      <input
        type={type}
        className="flex-1 focus:outline-none"
        placeholder={placeholder}
        {...rest}
      />
      {endIcon}
    </div>
  );
};

export default Input