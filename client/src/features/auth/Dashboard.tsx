import useStore from "@/store/userStore";
import { useLogoutMutation } from "./authMutations";
import { Loader, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user } = useStore();
  const { mutateAsync: logout, isPending } = useLogoutMutation();

  const handleLogout = async (e: any) => {
    e.preventDefault();
    await logout();
  };

  return (
    <>
      {user && (
        <div className="m-5 flex flex-col items-center">
          <img className="rounded-full w-36" src={user.picture} alt="User" />
          <p className="font-bold text-lg">{user.name}</p>
          <p className="text-sm">{user.email}</p>
          <button
            className="btn rounded-full btn-primary"
            disabled={isPending}
            onClick={handleLogout}
          >
            {isPending && <Loader className="animate-spin" />}
            <LogOut />
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
