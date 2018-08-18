import React from "react";
import Loader from "~/components/loader";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./register"),
  loading: Loader
});

export default ({ history }) => {
  return <LoadableComponent history={history} />;
};
