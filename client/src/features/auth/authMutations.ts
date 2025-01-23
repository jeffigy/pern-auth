import { useMutation } from "@tanstack/react-query";
import { googleAuth, logout } from "./authApi";
import { toast } from "sonner";
import useStore from "@/store/userStore";
import { AxiosError } from "axios";

export function useGoogleAuthMutation() {
  const { setCredential } = useStore.getState();

  return useMutation({
    mutationFn: (token: any) => googleAuth(token),
    mutationKey: ["google-auth"],
    onSuccess: (data) => {
      setCredential(data);
      toast.success("Successfully Logged in");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        toast.error("Error during authentication", {
          description: error.message,
        });
      }
    },
  });
}

export function useLogoutMutation() {
  const { clearCredential } = useStore.getState();

  return useMutation({
    mutationFn: () => logout(),
    mutationKey: ["logout"],
    onSuccess: (data) => {
      clearCredential();
      toast.success(data.message);
    },
    onError(error) {
      console.log(error);
    },
  });
}
