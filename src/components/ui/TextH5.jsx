import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function TextH5(props) {
  return (
    <Typography component="h2" variant="h5" color="common" align='left' gutterBottom >
      {props.children}
    </Typography>
  );
}

TextH5.propTypes = {
  children: PropTypes.node
};