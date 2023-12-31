import React , {useContext} from "react";
import AppContext from "../context/AppContext";


export default function Spent(){
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total,item)=>{
        return (total=total+item.cost);
    },0)
   
    return(
        <>
            <div className="alert alert-primary">
                Spent : Rs.{totalExpenses}
            </div>
        </>
    )
}