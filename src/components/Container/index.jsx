import styleContainer from "./Container.module.css";
import PropTypes from "prop-types";
let Container = ({ children }) => {
  return <section className={styleContainer.container}>{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
