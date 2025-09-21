import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"
import './ThemeToggle.css'
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? <FaRegMoon style={{ color: '#666' }} /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggle;
