import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import AppContext from '../context/AppContext'

export default function ExpenseList(){
    const{expenses} = useContext(AppContext)
    // const expenses = [
    //     {id:1221,name:"Shopping",cost:50},
    //     {id:1222,name:"Holiday",cost:40},
    //     {id:1223,name:"Transportation",cost:30},
    //     {id:1224,name:"Fuel",cost:400},
    // ]
    return(
       <ul>
        {expenses.map((expense)=>(
            <ExpenseItem 
             id={expense.id}
            name={expense.name}
            cost={expense.cost}
            />
        ))}
       </ul>
    )
}