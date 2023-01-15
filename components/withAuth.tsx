import React from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { appSelector, appDispatch } from "@/store/hooks";
import { getSession } from "@/features/admin/login";
=======
import { useRouter } from "next/router";
import { appSelector } from "@/store/hooks";
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6

const withAuth = (WrappedComponent: React.FC) => (props: any) => {
  const router = useRouter();
  const { route } = router;
<<<<<<< HEAD
  const { data, isAuthenticated, isAuthenticating } = appSelector(
    (state: any) => state.login
=======
  const { isAuthenticated, isAuthenticating } = appSelector(
    (state) => state.login
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
  );
  const dispatch = appDispatch();
  React.useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

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
