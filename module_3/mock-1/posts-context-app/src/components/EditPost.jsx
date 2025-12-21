import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";

const EditPost =({ post, setIsEditing})=>{
    const{updatePost}=useContext(PostsContext);
    const [title,setTitle]=useState(post,title);
    const[body,setBody]=useState(post,body);

    const handleSave=()=>{
        updatePost(post.id,{
            title,body
        });
        setIsEditing(false);
    };
    retrun (
        <div>
            <input value ={title} onChange={e=> setTitle(e.target.value)} />
            <textarea value={body} onChange ={e=>setBody(e.target.value)}/>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};
export default EditPost;