import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";
import React from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import { getSession } from "@/features/admin/login";
import { Provider, useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// function MyApp({ Component, ...rest }: AppProps) {
//   const { props } = wrapper.useWrappedStore(rest);
//   const store: any = useStore();
//   const dispatch = appDispatch();
//   React.useEffect(() => {
//     dispatch(getSession());
//   }, [dispatch]);
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={store.__persistor} loading={null}>
//         <Component {...props.pageProps} />
//       </PersistGate>
//     </Provider>
//   );
// }

function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  // const dispatch = appDispatch();
  // React.useEffect(() => {
  //   dispatch(getSession());
  // }, [dispatch]);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={store.__persistor} loading={null}> */}
<<<<<<< HEAD
      <Component {...props.pageProps} />
=======
      <Component {...pageProps} />
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
      {/* </PersistGate> */}
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
