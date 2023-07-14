import React,{useContext} from "react";
import Badge from 'react-bootstrap/Badge'
import {TiDelete} from 'react-icons/ti'
import AppContext from "../context/AppContext";

export default function ExpenseItem(props){
    const {dispatch}  = useContext(AppContext)
    
    const handleDeleteExpense = ()=>{
        dispatch({
            type:"Delete_Expense",
            payload:props.id,
        })
    }
    return(
       
        <li className="list-group-item d-flex justify-content-between align-item-center">
         {props.name}
         <div>
            <span>
             <Badge pill bg="primary">
              Rs {props.cost}
             </Badge>
            </span>
            <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
         </div>
        </li>
    )
}