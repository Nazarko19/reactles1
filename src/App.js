import Users from "./componens/users/Users";
import Posts from "./componens/posts/Posts";
import Comments from "./componens/comments/Comments";
import {getUser, getUsers} from "./service/user.servis";



export default function App() {

  return (
    <div>
         <Users/>
         <Posts/>
         <Comments/>
    </div>
  );
}


