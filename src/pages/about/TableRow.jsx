import React from 'react';
import PropTypes from 'prop-types';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const TableRows = ({ label, link, value }) => (
 
  <TableContainer component={Paper}>
    <Table  aria-label="simple table">
    <TableRow>
      <TableBody>
        <TableCell width="50%">{label}</TableCell >
        <TableCell >{link.length ? (<a href={link}>{value}</a>) : value}</TableCell >
      </TableBody>
  </TableRow>
    </Table>
  </TableContainer>

);

TableRows.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  link: PropTypes.string,
};

TableRows.defaultProps = {
  link: '',
};

export default TableRows;
