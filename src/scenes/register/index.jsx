import React from "react";
import Loader from "src/components/loader";
import Loadable from "react-loadable";
import PropTypes from "prop-types";

const LoadableComponent = Loadable({
  loader: () => import("./register"),
  loading: Loader
});

const asyncRegister = ({ history }) => <LoadableComponent history={history} />;

asyncRegister.propTypes = {
  history: PropTypes.object.isRequired
};

export default asyncRegister;
