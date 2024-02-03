import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user.displayName);
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="text-center">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
