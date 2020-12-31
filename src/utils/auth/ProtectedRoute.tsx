import { Route, Redirect } from "react-router-dom";
export function ProtectedRoute(props: any) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}
