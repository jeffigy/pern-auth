import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogo from "../assets/google-logo.png";
const GoogleAuth = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const res = await fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" +
          response.access_token,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
          mode: "cors", // Added mode option
        }
      );

      const userInfo = await res.json();
      console.log("User Info:", userInfo);
    },
    onError: () => {
      console.error("Login Failed");
    },
  });

  return (
    <button className="btn  rounded-full" onClick={() => login()}>
      <img className="w-8" src={GoogleLogo} alt="" />
      Sign in with Google
    </button>
  );
};

export default GoogleAuth;
