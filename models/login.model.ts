export type loginState = {
  data: {
    user_id: string;
    username: string;
    fullname: string;
    token: string;
  };
  isAuthenticated: boolean;
  isAuthenticating: boolean;
};
