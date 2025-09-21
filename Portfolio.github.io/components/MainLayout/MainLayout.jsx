import "./MainLayout.css";
import Typography from "../Typography/typegraphy";
import ThemeToggle from "../ThemeToggle";

const MainLayout = ({children}) => {
    return(
        <div className="main-layout">
            <ThemeToggle/>
            <Typography/>
            <main>{children}</main>
        </div>
    )
}

export default MainLayout;