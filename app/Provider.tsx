"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { User } from "lucide-react";
import { createContext, useEffect, useState } from "react";

function Provider({ children }: any) {
  const { user } = useUser();

  const CreateUser = useMutation(api.users.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>();
  console.log("user from clerk", user);

  useEffect(() => {
    user && CreateNewuser();
  }, [user]);

  const CreateNewuser = async () => {
    if (user) {
      const result = await CreateUser({
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl || "",
      });
      console.log(result);
      setUserDetail(result);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUserDetailContext = () => {
  return createContext(UserDetailContext);
};
