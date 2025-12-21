import { PostsProvider } from "./context/PostsContext";
import { ThemeProvider,ThemeContext } from "./context/ThemeContext";
import PostList from "./components/PostList";
import { useContext } from "react";

const AppCount =()=>{
    const{theme, toggleTheme} =useContext(ThemeContext);
    const styles={
        backgroundColor : theme === "light" ? "#f4f4f4" :"#1e1e1e",
        color:theme==="light"?"#000":"#fff",
        minHeight:"100vh",
        padding:"20px"
    };

    return(
        <div style={styles}>
            <button onClick={toggleTheme}>Switch Theme</button>
            <PostList />

        </div>
    );
};
function App(){
    return (
        <ThemeProvider>
            <PostsProvider>
                <AppContent />
            </PostsProvider>
        </ThemeProvider>
    );
}
export default App;