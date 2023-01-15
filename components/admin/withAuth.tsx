<<<<<<< HEAD
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

  if (route !== "/admin/login" && route !== "/admin/register") {
    if (!isAuthenticated) {
      router.push(`/admin/login`);
=======
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
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
      return null;
    }
  } else {
    if (isAuthenticated) {
      router.push(`/admin/user`); // default page after login
      return null;
    }
  }

<<<<<<< HEAD
=======
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

>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
  // If user is logged in, return original component
  return <WrappedComponent {...props} />;

  return null;
};

export default withAuth;
