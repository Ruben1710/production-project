import { useTheme } from "@/app/providers";
import { classNames } from "@/shared/lib";
import { FC } from "react";
import cls from './ThemeSwitcher.module.scss'
import ThemeSwitcherIcon from '@/shared/assets/icons/themeSwitcherIcon.svg'
import { Button } from "@/shared/ui";
import { ThemeButton } from "../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  className,

}) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      <ThemeSwitcherIcon width={'100%'} height={'100%'} className={classNames(cls.themeSwitcherIcon)} />
    </Button>
  );
};
