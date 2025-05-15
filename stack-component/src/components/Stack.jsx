import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Stack.module.css";

const breakpoints = ["xs", "sm", "md", "lg"];

const directionValues = ["row", "column"];
const alignItemsValues = [
  "flex-start",
  "flex-end",
  "center",
  "baseline",
  "stretch",
];
const justifyContentValues = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
];

const Stack = ({
  direction = "column",
  spacing = 0,
  alignItems = "stretch",
  justifyContent = "flex-start",
  children,
  className,
  ...props
}) => {
  const getDataAttributes = (prop, value) => {
    if (typeof value === "object") {
      return breakpoints.reduce((attrs, bp) => {
        if (value[bp] !== undefined) {
          attrs[`data-${prop}-${bp}`] = value[bp];
        }
        return attrs;
      }, {});
    }
    return breakpoints.reduce((attrs, bp) => {
      attrs[`data-${prop}-${bp}`] = value;
      return attrs;
    }, {});
  };

  const getBaseClass = (prop, value) => {
    const baseValue = typeof value === "object" ? value.xs ?? value : value;
    return `${prop}-${baseValue}`;
  };

  const classes = classNames(
    styles.stack,
    getBaseClass("direction", direction),
    getBaseClass("spacing", spacing),
    getBaseClass("alignItems", alignItems),
    getBaseClass("justifyContent", justifyContent),
    className
  );

  const dataAttributes = {
    ...getDataAttributes("direction", direction),
    ...getDataAttributes("spacing", spacing),
    ...getDataAttributes("alignItems", alignItems),
    ...getDataAttributes("justifyContent", justifyContent),
  };

  return (
    <div className={classes} {...dataAttributes} {...props}>
      {children}
    </div>
  );
};

Stack.propTypes = {
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(directionValues),
    PropTypes.shape({
      xs: PropTypes.oneOf(directionValues),
      sm: PropTypes.oneOf(directionValues),
      md: PropTypes.oneOf(directionValues),
      lg: PropTypes.oneOf(directionValues),
    }),
  ]),
  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ]),
  alignItems: PropTypes.oneOfType([
    PropTypes.oneOf(alignItemsValues),
    PropTypes.shape({
      xs: PropTypes.oneOf(alignItemsValues),
      sm: PropTypes.oneOf(alignItemsValues),
      md: PropTypes.oneOf(alignItemsValues),
      lg: PropTypes.oneOf(alignItemsValues),
    }),
  ]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.oneOf(justifyContentValues),
    PropTypes.shape({
      xs: PropTypes.oneOf(justifyContentValues),
      sm: PropTypes.oneOf(justifyContentValues),
      md: PropTypes.oneOf(justifyContentValues),
      lg: PropTypes.oneOf(justifyContentValues),
    }),
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Stack;
