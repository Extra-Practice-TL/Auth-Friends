import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (friends.length === 0) {
    return (
      <div>
        <h2>Loading Friends....</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Friends List Page</h2>
      <ul>
        {friends &&
          friends.map(friend => <li key={friend.id}>{friend.name}</li>)}
      </ul>
    </div>
  );
};

export default FriendsList;
