import {useEffect, useState} from "react";
import {getUsers} from "../../service/user.servis";
import User from "../user/User";

export default function Users() {
     let [users,setUsers] =useState([])

  useEffect(() => {
   getUsers().then(value => setUsers(...value))
  },)


  return (
    <div>
      {
        users.map((useritem) => <User key={useritem.id} item={useritem}/>)
      }

    </div>
  );
}