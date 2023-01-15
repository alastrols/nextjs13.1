<<<<<<< HEAD
import withAuth from "@/components/admin/withAuth";
import { GetServerSideProps, NextPage } from "next/types";
import React from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import { getKanyeQuote } from "@/features/random";
import { wrapper } from "@/store/store";
import Link from "next/link";

const Index: NextPage = ({ message }: any) => {
  const dispatch = appDispatch();
  const { data, pending, error } = appSelector((state) => state.kanyeQuote);

  return (
    <div>
      <h2>User</h2>
      <p>{message}</p>
      <Link href="/admin/news">GO News</Link>
=======
import React from "react";
import withAuth from "@/components/admin/withAuth";
import Head from "next/head";
import Link from "next/link";
const index = () => {
  return (
    <div>
      <Head>
        <title>User Management</title>
      </Head>
      <p>User Page</p>
      <Link href="/admin/news">Go News Page</Link>
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
    </div>
  );
};

<<<<<<< HEAD
export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res }: any) => {
      return {
        props: { message: "Hello world!" },
      };
    }
);

export default withAuth(Index);
=======
export default withAuth(index);
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
