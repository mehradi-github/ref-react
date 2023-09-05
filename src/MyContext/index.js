import { UserContext, UserContextProvider } from "./Contexts";
import Profile from "./Profile";
import { useContext } from "react";

const MyContext = () => {
  return (
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
  );
};

export default MyContext;

const AppInternal = () => {
  const { toggleUser } = useContext(UserContext);
  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
};
