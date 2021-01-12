import React, { useState, useEffect } from 'react';
import axios from 'axios';

const users = () => {
  // [value1, value2]
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = await axios.get('https://randomuser.me/api/');
      const newFriends = user.data.results;
      setFriends(newFriends);
    }
    fetchData();
  }, [])

  return (
    <div>
      {friends.length > 0 ? (
        <div>
          {friends[0].name.first}
        </div>
      ) :
      <p>User Data Loading!</p>
    }
    </div>
  )
}

export default users;
