import { Action, combineReducers, ThunkAction } from "@reduxjs/toolkit";

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { counterReducer } from "@/features/counter";
import { kanyeReducer } from "@/features/random";
import { loginReducer } from "@/features/admin/login";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const combinedReducer: any = combineReducers({
  counter: counterReducer,
  kanyeQuote: kanyeReducer,
  login: loginReducer,
});

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: any = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(combinedReducer, bindMiddleware([logger]));
    // return createStore(rootReducer, bindMiddleware([]));
  } else {
    //If it's on client side, create a store which will persist

    const persistConfig = {
      key: "root",
      storage,
      blacklist: ["login"],
    };

    const persistedReducer = persistReducer(persistConfig, combinedReducer);

    const store: any = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
      // bindMiddleware([sagaMiddleware])
    );
    store.__persistor = persistStore(store);
    return store;
  }
};
type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper(makeStore);
