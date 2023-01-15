import withAuth from "@/components/admin/withAuth";
import { GetServerSideProps, NextPage } from "next/types";
import React from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import Layout from "@/components/admin/Layout/Layout";
import { wrapper } from "@/store/store";
import Link from "next/link";
import { getSession } from "@/features/admin/login";

const Index: NextPage = ({ message }: any) => {
  const dispatch = appDispatch();
  const { data, pending, error } = appSelector((state) => state.kanyeQuote);

  return (
    <Layout>
      <div>
        <h2>User</h2>
        <p>{message}</p>
        <Link href="/admin/news">GO News</Link>
      </div>
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ dispatch, req, res }: any) => {
      return {
        props: { message: "Hello world!" },
      };
    }
);

export default withAuth(Index);
