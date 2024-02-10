import { HEADER_LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="main-wrapper absolute z-30 px-12 py-2 bg-gradient-to-b from-black w-full  ">
      <div className="container flex justify-between">
        <div className="navbar">
          <img src={HEADER_LOGO} alt="" className="w-44 z-30" />
        </div>

        <div className="button-wrapper">
          <button
            onClick={handleClick}
            className="bg-red-600 text-white py-2 px-4 my-4 rounded-md font-bold"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
