import { useState } from "react";
import { NextPage } from "next/types";
import withAuth from "@/components/withAuth";
import { NextSeo } from "next-seo";
import { appDispatch, appSelector } from "@/store/hooks";
import { getKanyeQuote } from "@/features/random";
import { wrapper } from "@/store/store";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    ({ preview }) => {
      store.dispatch({ type: "SET_NAME", payload: "Seymur" });
      return { props: { status: "online" } };
    }
);

const Index: NextPage = ({ status }: any) => {
  const dispatch = appDispatch();
  const { data, pending, error } = appSelector((state) => state.kanyeQuote);
  const router = useRouter();

  return (
    <div>
      <h2>Generate random Kanye West quote {status}</h2>
      {pending && <p>Loading...</p>}
      {<p>{data.quote}</p>}
      <p>{status}</p>
      <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button>
    </div>
  );
};

// index.getInitialProps = async ({ req }: any) => {
//   const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//   return { userAgent };
// };
export default Index;
