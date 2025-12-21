import {createContext, useEffect, useState} from "react";
export const PostsContext = createContext();
export const PostsProvider=({ children }) => {
    const [posts,setPosts]=useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>
            setPosts(data.slice(0,20))
        );
    },[]);

    const updatePost=(id,updatePost)=>{
        setPosts(posts.map(post=>
            post.id===id ? 
            { ...post, ...updatePost

            } : post
        ));
    };

    const deletePost=(id)=>{
        setPosts(posts.filter(post=>post.id !== id));
    };

    return(
        <PostsContext.Provider value ={{
            posts,updatePost,deletePost
        }}>{children}</PostsContext.Provider>
    );
};