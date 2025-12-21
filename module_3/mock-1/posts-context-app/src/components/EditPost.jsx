import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";

const EditPost =({ post, setIsEditing})=>{
    const{updatePost}=useContext(PostsContext);

    const initialTitle =post.title;
    const initialBody =post.body;

    const [title,setTitle]=useState(initialTitle);
    const[body,setBody]=useState(initialBody);

    const handleSave=()=>{
        updatePost(post.id,{
            title,body
        });
        setIsEditing(false);
    };
    return (
        <div>
            <input value ={title} onChange={e=> setTitle(e.target.value)} />
            <textarea value={body} onChange ={e=>setBody(e.target.value)}/>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};
export default EditPost;