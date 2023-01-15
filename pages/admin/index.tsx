import { useState } from "react";
import withAuth from "@/components/admin/withAuth";
import { appDispatch, appSelector } from "@/store/hooks";
import { decrement, increment, incrementByAmount } from "@/features/counter";

const IndexPage: React.FC = () => {
  return <></>;
};

export default withAuth(IndexPage);
