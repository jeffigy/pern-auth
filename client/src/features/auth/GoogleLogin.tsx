import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "@/assets/google-logo.png";
import { useGoogleAuthMutation } from "./authMutations";
import { Loader } from "lucide-react";

import { toast } from "sonner";

const GoogleAuth = () => {
  const { isPending, mutateAsync: googleAuth } = useGoogleAuthMutation();

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (response) => await googleAuth(response),
    onError: (error) => {
      toast.error("Error", {
        description: "Something went wrong ",
      });
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
    </>
  );
};

export default GoogleAuth;
