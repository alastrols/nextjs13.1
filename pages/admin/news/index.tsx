import React from "react";
import withAuth from "@/components/admin/withAuth";
import Head from "next/head";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <Head>
        <title>News Management</title>
      </Head>
      <p>User News</p>
      <Link href="/admin/user">Go User Page</Link>
    </div>
  );
};

export default withAuth(index);
