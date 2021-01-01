import { Route, Redirect } from "react-router-dom";
import { ProtectedRouteProps } from "../../types";

export function ProtectedRoute(props: ProtectedRouteProps) {
  console.log(props);
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
