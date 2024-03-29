import { classNames } from "@/shared/lib";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  CLEAR = "clear"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
