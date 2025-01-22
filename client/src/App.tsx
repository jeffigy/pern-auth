import GoogleAuth from "@/features/auth/GoogleLogin";

const App = () => {
  return (
    <div className=" h-screen flex justify-center items-center flex-col">
      <GoogleAuth />
    </div>
  );
};

export default App;
