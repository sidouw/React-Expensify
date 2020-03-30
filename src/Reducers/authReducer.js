export default (state={},action)=>{

    switch (action.type) {
        case 'LOGOUT':
            return {}
        case 'LOGIN':
            return {uid:action.uid} 
        default:
            return state;
    }
}