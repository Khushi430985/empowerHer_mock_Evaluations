import { useContext,useState } from "react";
import { PostsContext } from "../context/PostsContext";
import EditPost from "./EditPost";

const PostCard =({post}) =>{
    const {deletePost}=useContext(PostsContext);
    const [isEditing,setIsEditing]=useState(false);
    return(
        <div className="post-card" style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
        {isEditing ? (
            <EditPost post ={post}
            setIsEditing ={setIsEditing} />

        ) : (
            <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>
                setIsEditing(true)}>Edit</button>
            <button onClick={()=>
                deletePost(post.id)}>Dlete</button>
                </> 
            
        )}
        </div>
    );
};
export default PostCard;