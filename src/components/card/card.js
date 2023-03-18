import React from "react";
import PropTypes from "prop-types";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Loading, Disabled } from "../tools";
import "./card.css";

function Card({
  children,
  title,
  footer,
  extra,
  icon,
  loading,
  className,
  tabs = false,
  disabled = false,
  contentStyle = {},
  titleStyle = {},
  ...rest
}) {
  // const leftOpacity = {
  //   hidden: {
  //     opacity: 0,
  //     x: "25px",
  //     translateX: "-25px",
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     // transition: { type: "spring", stiffness: 100 },
  //     translateX: "0",
  //   },
  //   close: {
  //     opacity: 0,
  //     x: "-25px",
  //     translateX: "25px",
  //   },
  // };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();

  return (
    <div className={`card${tabs ? " card-tabs " : " "}${className}`} {...rest}>
      {loading && <Loading />}
      {disabled && <Disabled />}
      {(title || icon || extra) && (
        <div className="card-header">
          {icon && <div className="card-icon">{icon}</div>}
          {title && (
            <div className="card-title" style={titleStyle}>
              {title}
            </div>
          )}
          <div className="card-space" />
          {extra && <div className="card-extra">{extra}</div>}
        </div>
      )}
      {children && (
        <div className="card-content" style={contentStyle}>
          <motion.div className="progress" style={{ scaleX }} />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: 0.5, ease: "circOut" },
            }}
            exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
          >
            {children}
          </motion.div>
          {/* <AnimatePresence>
            <motion.div
              key={"1"}
              variants={leftOpacity}
              initial="hidden"
              animate="visible"
              exit="close"
              className={`h-full ${className}`}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {children}
            </motion.div>
          </AnimatePresence> */}
        </div>
      )}
      {/* {cardContent && <div>{cardContent}</div>} */}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  footer: PropTypes.any,
  extra: PropTypes.any,
  className: PropTypes.string,
  tabs: PropTypes.bool,
  loading: PropTypes.bool,
  contentStyle: PropTypes.object,
};

Card.defaultProps = {
  icon: undefined,
  title: undefined,
  footer: undefined,
  extra: undefined,
  className: "",
  tabs: false,
  loading: false,
  contentStyle: {},
};

export default Card;
