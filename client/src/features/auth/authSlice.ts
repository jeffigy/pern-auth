import { DecodedToken } from "@/types/auth.types";
import { User } from "@/types/user.types";
import { jwtDecode } from "jwt-decode";
import { StateCreator } from "zustand";

type AuthState = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
};

type ActionState = {
  setCredential: (token: string) => void;
  clearCredential: () => void;
};

export type AuthSlice = AuthState & ActionState;

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setCredential: (token: string) => {
    const { userInfo } = jwtDecode<DecodedToken>(token);

    set({
      token,
      user: userInfo,
      isAuthenticated: true,
    });
  },
  clearCredential: () => set(initialState),
});

export default createAuthSlice;
