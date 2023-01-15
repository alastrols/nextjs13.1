import React from "react";
import { useRouter } from "next/router";
import { appSelector } from "@/store/hooks";

const withAuth = (WrappedComponent: React.FC) => (props: any) => {
  const router = useRouter();
  const { route } = router;
  const { isAuthenticated, isAuthenticating } = appSelector(
    (state) => state.login
  );

  // is fetching session (eg. show spinner)
  if (isAuthenticating) {
    return null;
  }
  // If user is not logged in, return login component

  if (route !== "/login" && route !== "/register") {
    if (!isAuthenticated) {
      router.push(`/login`);
      return null;
    }
  } else {
    if (isAuthenticated) {
      router.push(`/`); // default page after login
      return null;
    }
  }

  // If user is logged in, return original component
  return <WrappedComponent {...props} />;

  return null;
};

export default withAuth;
