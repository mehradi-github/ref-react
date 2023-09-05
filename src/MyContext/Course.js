import { UserContext } from "./Contexts";
import { useContext } from "react";

const Course = () => {
  const { user } = useContext(UserContext);
  return <p>Your course is {user.course}</p>;
};
export default Course;
