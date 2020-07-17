import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.student_id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.grade}</TableCell>
                <TableCell>{this.props.semester}</TableCell>
                <TableCell>{this.props.phone}</TableCell>
                <TableCell>{this.props.email}</TableCell>
                {/*<TableCell>{this.props.도서대출}</TableCell>*/}
                {/*<TableCell>{this.props.회비납부}</TableCell>*/}
                <TableCell>{this.props.level}</TableCell>
            </TableRow>
        )// return
    }//render
}//Componet

