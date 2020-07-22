import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function ColorBody1(props) {
  return (
    <Typography component="h2" variant="body1" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

ColorBody1.propTypes = {
  children: PropTypes.node
};
