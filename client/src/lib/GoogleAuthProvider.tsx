import { VITE_OAUTH_CLIENT_ID } from "@/config/env.config";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId={VITE_OAUTH_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
