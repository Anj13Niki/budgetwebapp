import React, { useContext, useState } from "react";
import AppContext from '../context/AppContext'
import {v4 as uuidv4} from "uuid"

export default function AddExpenseForm(){
    const {dispatch} = useContext(AppContext)
    const[name,setName] = useState("");
    const[cost,setCost] = useState("");
    const onSubmit = (e)=>{
        e.preventDefault();
        alert("name : "+name + " cost : "+cost);
        const expense={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),
        };
        dispatch({
            type:"ADD_EXPENSE",
            payload:expense,
        })
    }

    return(
        <form onSubmit={onSubmit} className="form">
            <div className="row " >
                <div className="col-sm">
                    <label for="name" id="field">Name</label>
                    <input 
                     type="text"
                     required
                     className="form-content"
                     onChange={(e)=>setName(e.target.value)}
                     value={name}
                     id="name"/>
                </div>
                <div className="col-sm">
                    <label for="cost" id="field">Cost</label>
                    <input 
                      type="text"
                      required
                      className="form-content"
                      onChange={(e)=>setCost(e.target.value)}
                      value={cost}
                      id="cost"/>
                </div>
               
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    )
}