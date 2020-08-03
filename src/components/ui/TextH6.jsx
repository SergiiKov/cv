import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function TextH6(props) {
  return (
    <Typography component="h6" variant="h6" color="common" align='left' gutterBottom >
      {props.children}
    </Typography>
  );
}

TextH6.propTypes = {
  children: PropTypes.node
};
