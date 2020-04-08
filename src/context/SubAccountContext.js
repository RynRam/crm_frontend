import createDataContext from './createDataContext';


const dataReducer = (state, action) => {
    switch (action.type) {
        case 'add_subaccount':
            return [...state, { 
                id: state.length, 
                subAcct: action.payload.subAcct, 
                subDesc: action.payload.subDesc,
                subGroup: action.payload.subGroup, 
                active: action.payload.active,
}
        ]
        case 'edit_subaccount': 
            return state.map((data)=> {
                return data.id === action.payload.id ? action.payload : data;
            })
        case 'delete_subaccount':
            return state.filter((data) => data.id !== action.payload)
        default:
            return state
    }
}

const addSubAccount = (dispatch) => {
    return (subAcct, subDesc,subGroup,active,callback)  => {
        dispatch({ type: 'add_subaccount', payload: {subAcct, subDesc, subGroup, active}})
        if(callback){
            callback();
        }
        
    }
    // return async (x,y,z,callback) => {
    //    try {
    //       await axios.post('ds',x,y,z) 
    //       dispatch({ type: 'add_subaccount', payload: {x,y,z} })
    //       callback();
    //    } catch (err) {
           
    //    } 

}
const editSubAccount = (dispatch) => {
    return (id,subAcct,subDesc,subGroup,active,callback) => {
        dispatch({ type: 'edit_subaccount', payload: {id,subAcct, subDesc, subGroup, active} })
        if(callback){
            callback();
        }
    }
}

const deleteSubAccount = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_subaccount', payload: id })
    }
}

export const { Context, Provider } = createDataContext(dataReducer, { addSubAccount, editSubAccount, deleteSubAccount}, [])