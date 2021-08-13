import {useEffect, useState} from "react";
import {getaxioscomment} from "../../service/comment.servis";
import Comment from "../coment/Comment";

export default function Comments() {
    let [comments,setComments] = useState([])

  useEffect(()=>{
     getaxioscomment().then(({data}) => setComments([...data]));
  })
  return (
    <div>

        {
            comments.map((usercomment) => <Comment key={usercomment.id} usercoment={usercomment} />)
        }

    </div>
  );
}