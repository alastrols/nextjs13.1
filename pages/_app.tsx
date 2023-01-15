import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";
import React from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import { getSession } from "@/features/admin/login";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, ...rest }: AppProps) {
  const { props } = wrapper.useWrappedStore(rest);
  const store: any = useStore();
  // const dispatch = appDispatch();
  // React.useEffect(() => {
  //   dispatch(getSession());
  // }, [dispatch]);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={store.__persistor} loading={null}> */}
      <Component {...props.pageProps} />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
