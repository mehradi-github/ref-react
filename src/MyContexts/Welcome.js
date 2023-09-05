import { useContext } from "react";
import { UserContext } from "./Contexts";

const Welcome = () => {
  const user = useContext(UserContext);
  return <h1>Hello {user.name}</h1>;
};
export default Welcome;
