import { Box } from "@material-ui/core";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardCustomers } from '../../redux/actions';
import { customerSelectedID } from '../../redux/actions';
import Typography from '@mui/material/Typography';
import {fetchDashboardCustomers}from '../../api/apiUtils';
import { orderListSchema } from "../../Data/Schema";

const useStyles = makeStyles({
    table: {
        background: "#f1f1f1",
        '&:hover': {
            cursor: "pointer",
            background: "#D3D4D5",
        }
    }
});

const AdminDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getDashboardCustomers = async (id) => {
            const myRequest = new Request('http://localhost:9000/dashboardCustomers', {
                method: 'GET',
                headers: { id },
                mode: 'cors',
                cache: 'default',
            });
            fetchDashboardCustomers(myRequest).then(data => dispatch(dashboardCustomers(data)))
        }
        getDashboardCustomers();
    }, [dispatch])
    const dashboardCustomersstate = useSelector(state => state.reducer.dashboardCustomers);


    const classes = useStyles();
    const navigate = useNavigate();
    function toDetails(orderId) {
        console.log(orderId);
        navigate(`/order/${orderId}`);
    }
    
    return (
        <Box>
            <Navbar />
            <Typography variant='body2' sx={{ textAlign: "center", marginTop: "-60px", fontSize: "50px", fontWeight: 500, fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>
                Alle Bestellungen
            </Typography>
            <Box sx={{ margin: "0px 4%" }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 800 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {orderListSchema.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dashboardCustomersstate
                                    .map((row) => {
                                        return (
                                            <TableRow className={classes.table} role="checkbox" tabIndex={-1} key={row.code}
                                                onClick={() => { toDetails(row.orderId); dispatch(customerSelectedID(row.orderId)) }}
                                            >
                                                {orderListSchema.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <Footer />
        </Box>
    )
}

export default AdminDashboard;