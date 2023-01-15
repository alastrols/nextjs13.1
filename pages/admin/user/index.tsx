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
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res }: any) => {
      return {
        props: { message: "Hello world!" },
      };
    }
);

export default withAuth(Index);
