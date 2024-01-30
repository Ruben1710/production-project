import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme, AppRouter } from "@/app/providers";
import { classNames } from "@/shared/lib";
import { Navbar } from "@/widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>change</button>
      <AppRouter />
    </div>
  );
};
export default App;
