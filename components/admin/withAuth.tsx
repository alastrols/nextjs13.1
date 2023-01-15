import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { appSelector } from "@/store/hooks";
import Route from "next/router";

const withAuth = (WrappedComponent: React.FC) => (props: any) => {
  const router = useRouter();
  const { route }: any = router;
  const { isAuthenticated, isAuthenticating } = appSelector(
    (state) => state.login
  );

  if (isAuthenticating) {
    return null;
  }

  // If user is not logged in, return login component
  console.log(isAuthenticated);
  if (route !== "/admin/login") {
    if (!isAuthenticated) {
      // console.log("1");
      router.replace(`/admin/login`);
      return null;
    }
    if (isAuthenticated && route == "/") {
      router.push(`/admin/user`);
      return null;
    }
  } else {
    if (isAuthenticated) {
      router.push(`/admin/user`); // default page after login
      return null;
    }
  }

  if (route !== "/admin") {
    if (!isAuthenticated) {
      Route.push(`/admin/login`);
      return null;
    }
    if (isAuthenticated && route == "/") {
      router.push(`/admin/user`);
      return null;
    }
  } else {
    if (!isAuthenticated) {
      router.push(`/admin/login`); // default page after login
      return null;
    }
  }

  // If user is logged in, return original component
  return <WrappedComponent {...props} />;

  return null;
};

export default withAuth;
