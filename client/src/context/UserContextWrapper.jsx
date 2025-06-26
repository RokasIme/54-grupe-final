import { useState } from "react";
import { initialUserContext } from "./initialUserContext";
import { UserContext } from "./UserContext";

export function UserContextWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(initialUserContext.isLoggedIn);
  const [role, setRole] = useState(initialUserContext.role);
  const [username, setUsername] = useState(initialUserContext.username);
  const [email, setEmail] = useState(initialUserContext.email);
  const [userId, setUserId] = useState(initialUserContext.userId);

  const value = {
    isLoggedIn,
    role,
    username,
    email,
    userId,
    setIsLoggedIn,
    setRole,
    setUsername,
    setEmail,
    setUserId,
  };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
}
