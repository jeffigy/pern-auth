import { useMutation } from "@tanstack/react-query";
import { googleAuth } from "./authApi";

export function useGoogleAuthMutation() {
  return useMutation({
    mutationFn: (token: any) => googleAuth(token),
    mutationKey: ["google-auth"],
  });
}
