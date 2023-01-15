import { GetServerSideProps, NextPage } from "next/types";
import React from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import withAuth from "@/components/withAuth";
import { wrapper } from "@/store/store";

const Index: NextPage = ({ message }: any) => {
  const dispatch = appDispatch();
  const { data, pending, error } = appSelector((state) => state.kanyeQuote);

  return (
    <div>
      <h2>Generate random Kanye West quote</h2>
      <p>{message}</p>
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

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async ({ req, res }: any) => {
//     return {
//       props: { message: "Hello world!" },
//     };
//   });

export default Index;
