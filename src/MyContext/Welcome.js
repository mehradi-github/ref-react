import { useContext } from "react";
import { UserContext } from "./Contexts";

const Welcome = () => {
  const { user } = useContext(UserContext);
  return <h3>Hello {user.name}</h3>;
};
export default Welcome;
