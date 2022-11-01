import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "../router/Page1Routes";
import { Page2Routes } from "../router/Page2Routes";
import { Page404 } from "../Page404";
export const Router = () => {
  return (
    <Switch>
      <Route exact="true" path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      ></Route>
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      ></Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};
