"use client";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../utils/firebase";

export default function Login() {
  //SIGN IN WITH GOOGLE
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium">Join today!!</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers:</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
        >
          <FcGoogle className="text-2xl" />
          Sign in with google
        </button>
        <button className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <AiFillFacebook className="text-2xl text-blue-600" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
