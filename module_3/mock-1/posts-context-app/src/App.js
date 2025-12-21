import { PostsProvider } from "./context/PostsContext";
import { ThemeProvider,ThemeContext } from "./context/ThemeContext";
import PostList from "./components/PostList";
import { useContext } from "react";

const AppContent =()=>{
    const{theme, toggleTheme} =useContext(ThemeContext);
    

    return(
        <div className={theme} style={{minHeight:"100vh", padding:"20px"}}>
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