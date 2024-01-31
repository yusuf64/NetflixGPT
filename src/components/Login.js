import { useRef, useState } from "react";
import { LOGIN_PAGE_BANNER } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
// import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    name: null,
  });

  const handleClick = () => {
    setSignIn(!signIn);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  console.log(name?.current?.value);

  const handleSubmit = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );

    setErrors({
      email: message.email,
      password: message.password,
      name: message?.name,
    });
    // console.log(email.current.value, password.current.value);
    // console.log(message);
  };

  return (
    <div
      className="main-wrapper bg-cover w-full h-[1000px]"
      style={{ backgroundImage: `url(${LOGIN_PAGE_BANNER})` }}
    >
      <Header />

      <div className="body-wrapper text-center flex justify-center py-44 ">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          autocomplete="on"
          className="w-1/3 flex flex-col bg-black bg-opacity-80 py-14 px-20 rounded-md"
        >
          <p className="text-left text-white font-bold text-3xl pb-5">
            {signIn ? "Sign In " : "Sign Up"}
          </p>
          {!signIn && (
            <>
              <input
                type="text"
                ref={name}
                placeholder="Full Name"
                className="p-3 m-2 w-full mx-auto  rounded-md bg-transparent border-gray-500 border-[1px] text-white"
              />
              <p className="text-red-500 text-left">{errors.name}</p>
            </>
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-3 m-2 w-full mx-auto text-white rounded-md bg-transparent border-gray-500 border-[1px]"
          />
          <p className="text-red-500 text-left">{errors.email}</p>
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 m-2 w-full mx-auto text-white rounded-md bg-transparent border-gray-500 border-[1px]"
          />
          <p className="text-red-500 text-left">{errors.password}</p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-600 inline-block w-full mx-auto my-8 py-3 rounded-md text-white font-bold "
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="cursor-pointer text-white text-left"
            onClick={handleClick}
          >
            {signIn
              ? "New to Netflix ? Sign up Now"
              : "Already Registered ? Sigin Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
