"use client";
import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <h1>Welcome to your dashboard! {user?.displayName}</h1>
    </div>
  );
}
