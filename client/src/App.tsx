import GoogleAuth from "@/features/auth/GoogleLogin";
import useStore from "./store/userStore";
import Dashboard from "./features/auth/Dashboard";

const App = () => {
  const { isAuthenticated } = useStore();
  return (
    <div className=" h-screen flex justify-center items-center flex-col">
      {isAuthenticated ? <Dashboard /> : <GoogleAuth />}
    </div>
  );
};

export default App;
