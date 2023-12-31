import { createContext, useReducer } from "react"
const AppReducer = (state,action)=>{
    console.log(state)
    switch(action.type){
        case "ADD_EXPENSE":
        return{
            ...state,
            expenses:[...state.expenses,action.payload]
        }
        case "Delete_Expense":
            return{
                ...state,
                expenses:state.expenses.filter((expense)=>expense.id!==action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    budget : 1000,
    expenses : [
        // {id:1, name:"Shopping" , cost:40},
    ]
}

const AppContext = createContext();

export const AppProvider = (props) =>{
    const[state,dispatch] = useReducer(AppReducer,initialState);

    return(
        <AppContext.Provider
         value={{
            budget:state.budget,
            expenses:state.expenses,
            dispatch
         }}>
         {props.children}
        </AppContext.Provider>
    )
}
export default AppContext;