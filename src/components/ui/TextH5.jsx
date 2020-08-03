import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function TextH5(props) {
  return (
    <Typography variant="h4" color="secondary" align='left' gutterBottom >
      {props.children}
    </Typography>
  );
}

TextH5.propTypes = {
  children: PropTypes.node
};
