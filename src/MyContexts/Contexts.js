import { createContext } from "react";

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    course: null,
  },
});
