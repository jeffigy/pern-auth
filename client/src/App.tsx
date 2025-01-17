import { GoogleLogin } from "@react-oauth/google";
import GoogleAuth from "./components/GoogleLogin";

const App = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <GoogleAuth />
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default App;
