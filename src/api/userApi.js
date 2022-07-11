import schemaApi from "./schemaApi";

const userApi = {
    loginUser: (data)=>{
        return schemaApi.post('/sign-in',data);
     },
    registerUser: (data)=>{
       return schemaApi.post('/sign-up',data);
    },
    fecthUser: ()=>{
        return schemaApi.get('/user');
     },
}


export default userApi;