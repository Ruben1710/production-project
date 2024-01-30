import { classNames } from "@/shared/lib";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
