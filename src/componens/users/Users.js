import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../service/user.servis";
import User from "../user/User";

export default function Users() {
     let [users,setUsers] = useState([])


  useEffect(() => {
   getUsers().then(value => setUsers([...value]))



  },[])


  return (
    <div>
      {
        users.map((item,index) => <User key={item.id} item={item} />)
      }


    </div>
  );
}