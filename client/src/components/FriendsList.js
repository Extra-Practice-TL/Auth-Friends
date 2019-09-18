import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
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
      <main>
        <h2>Loading Friends....</h2>
      </main>
    );
  }

  return (
    <main>
      <Navigation />
      <h2>Friends</h2>
      <ul>
        {friends &&
          friends.map(friend => <li key={friend.id}>{friend.name}</li>)}
      </ul>
    </main>
  );
};

export default FriendsList;
