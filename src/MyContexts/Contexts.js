import { createContext, useState } from "react";

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    course: null,
  },
});

const user1 = { name: "user 1", course: "course 1" };
const user2 = { name: "user 2", course: "course 2" };

export const UserContextProvider = ({ childern }) => {
  const [user, setUser] = useState(user1);

  const toggleUser = user === user1 ? user2 : user1;

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {childern}
    </UserContext.Provider>
  );
};
