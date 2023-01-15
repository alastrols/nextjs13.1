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
<<<<<<< HEAD
import { persistStore, persistReducer } from "redux-persist";
=======
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
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

<<<<<<< HEAD
// const reducer = (state, action) => {
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
=======
const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === REHYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
<<<<<<< HEAD
const makeStore: any = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
=======
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter", "kanyeQuote"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const makeStore: any = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(persistedReducer, bindMiddleware([thunkMiddleware]));
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
    // return createStore(rootReducer, bindMiddleware([]));
  } else {
    //If it's on client side, create a store which will persist

<<<<<<< HEAD
    const persistConfig = {
      key: "root",
      storage,
      blacklist: ["login"],
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

=======
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
    const store: any = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    );
    store.__persistor = persistStore(store);
    return store;
  }
};

<<<<<<< HEAD
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

=======
>>>>>>> d771c8f00f1fecbb872b1b7395a5e8ea0a54fda6
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
