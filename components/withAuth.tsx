import React from "react";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { appSelector, appDispatch } from "@/store/hooks";
import { getSession } from "@/features/admin/login";

const withAuth = (WrappedComponent: React.FC) => (props: any) => {
  const router = useRouter();
  const { route } = router;
  const { data, isAuthenticated, isAuthenticating } = appSelector(
    (state: any) => state.login
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
    }else{
      router.push(`/login`);
      return null;
    }
  }

  // If user is logged in, return original component
  return <WrappedComponent {...props} />;

  return null;
};

export default withAuth;
