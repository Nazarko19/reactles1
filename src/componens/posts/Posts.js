import {useEffect, useState} from "react";
import {getPost} from "../../service/post.servis";
import Post from "../Post/Post";

export default function Posts() {

    let [posts,setPost] = useState([])

    useEffect (() =>{
        getPost().then(value => setPost([...value]))
    },[])

  return (
      <div>
          {
              posts.map((postitem) => <Post key={postitem.id} postitem={postitem}/>)
          }
    </div>
  );
}