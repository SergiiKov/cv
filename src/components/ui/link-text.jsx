import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function TextBody2(props) {
  return (
    <Typography component="h2" variant="body2" color="error" align='left' gutterBottom>
      {props.children}
    </Typography>
  );
}

TextBody2.propTypes = {
  children: PropTypes.node
};
