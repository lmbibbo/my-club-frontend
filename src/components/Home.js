import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div>
      
        { currentUser ? (<h3>SI</h3>):(<h3>No</h3>)
        }
     
    </div>
  );
};

export default Home;
