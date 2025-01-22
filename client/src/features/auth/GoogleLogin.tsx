import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "@/assets/google-logo.png";
import { useGoogleAuthMutation } from "./authMutations";
import { Loader } from "lucide-react";
import { useState } from "react";
import { User } from "@/types/user.types";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types/auth.types";

const GoogleAuth = () => {
  const { isPending, mutateAsync: googleAuth } = useGoogleAuthMutation();
  const [user, setUser] = useState<User | null>(null);

  const handleSuccess = async (response: any) => {
    try {
      const data = await googleAuth(response);
      const { userInfo } = jwtDecode<DecodedToken>(data);
      setUser(userInfo);
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: handleSuccess,
    onError: (error) => {
      console.error("Login Failed", error);
    },
  });

  return (
    <>
      <button
        disabled={isPending}
        className="btn rounded-full"
        onClick={() => login()}
      >
        {isPending && <Loader className="animate-spin" />}
        <img className="w-8" src={GoogleLogo} alt="Google Logo" />
        Sign in with Google
      </button>

      {user && (
        <div className="m-5 flex flex-col items-center">
          <img className="rounded-full w-36" src={user.picture} alt="User" />
          <p className="font-bold text-lg">{user.name}</p>
          <p className="text-sm">{user.email}</p>
        </div>
      )}
    </>
  );
};

export default GoogleAuth;
