import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "@/assets/google-logo.png";
import { useGoogleAuthMutation } from "./authMutations";
import { Loader } from "lucide-react";
const GoogleAuth = () => {
  const { isPending, mutateAsync: googleAuth } = useGoogleAuthMutation();
  const login = useGoogleLogin({
    flow: "auth-code",
    redirect_uri: "http://localhost:3500/api/auth/google",
    onSuccess: async (response) => {
      await googleAuth(response, {
        onSuccess(data) {
          console.log(data);
        },
        onError(error) {
          console.log(error);
        },
      });
    },
    onError: (error) => {
      console.error("Login Failed", error);
    },
  });

  return (
    <button className="btn  rounded-full" onClick={() => login()}>
      {isPending ? (
        <>
          <Loader className="animate-spin" />
          Signing in with Google...
        </>
      ) : (
        <>
          {" "}
          <img className="w-8" src={GoogleLogo} alt="" />
          Sign in with Google
        </>
      )}
    </button>
  );
};

export default GoogleAuth;
