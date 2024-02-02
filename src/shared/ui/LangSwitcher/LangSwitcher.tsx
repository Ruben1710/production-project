import { classNames } from "@/shared/lib";
import { FC } from "react";
import cls from './LangSwitcher.module.scss'
import { Button } from "@/shared/ui";
import { ThemeButton } from "../Button/Button";
import { useTranslation } from "react-i18next";
import TranslationIcon from '@/shared/assets/icons/translationIcon.svg'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className,

}) => {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }
  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      <TranslationIcon width={'100%'} height={'100%'} className={classNames(cls.translationIcon)} />

    </Button>
  );
};
