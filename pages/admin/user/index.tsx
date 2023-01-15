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
    </div>
  );
};

export default withAuth(index);
