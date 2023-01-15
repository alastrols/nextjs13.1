import {
  Action,
  combineReducers,
  AnyAction,
  ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { counterReducer } from "@/features/counter";
import { kanyeReducer } from "@/features/random";
import { loginReducer } from "@/features/admin/login";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const combinedReducer: any = combineReducers({
  counter: counterReducer,
  kanyeQuote: kanyeReducer,
  login: loginReducer,
});

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// const reducer = (state, action) => {
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
const makeStore: any = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
    // return createStore(rootReducer, bindMiddleware([]));
  } else {
    //If it's on client side, create a store which will persist

    const persistConfig = {
      key: "root",
      storage,
      blacklist: ["login"],
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store: any = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );
    store.__persistor = persistStore(store);
    return store;
  }
};

// const makeStore = ({ isServer }: any) => {
//   if (isServer) {
//     return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
//   } else {
//     const { persistStore, persistReducer } = require("redux-persist");

//     const storage =
//       typeof window !== "undefined"
//         ? createWebStorage("local")
//         : createNoopStorage();
//     const persistConfig = {
//       key: "myProject",
//       blacklist: ["login"],
//       storage,
//     };

//     const persistedReducer = persistReducer(persistConfig, combinedReducer);
//     const store: any = createStore(
//       persistedReducer,
//       bindMiddleware([thunkMiddleware])
//     );

//     store.__persistor = persistStore(store);

//     return store;
//   }
// };

type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper(makeStore, {
  debug: false,
});
