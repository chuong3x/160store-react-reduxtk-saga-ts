import clsx from "clsx";
import styles from "./Button.module.scss";
interface ButtonProps {
  children: any;
  active?: boolean;
  className?: string;
  [key: string]: any;
}
export default function Button({
  children,
  active,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(className, styles.btn, { [styles.active]: active })}
      {...rest}
    >
      {children}
    </button>
  );
}
