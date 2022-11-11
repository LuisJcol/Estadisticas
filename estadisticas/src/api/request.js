import axios from "axios";
import { useState } from "react";


export async function makeRegisterData(jsn) {  
        try {
          const res = await axios.post(
            `http://restapi.adequateshop.com/api/authaccount/registration`, 
            jsn, {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'origin':'*',
              }
            });
          return res.data;
        }
        catch(err){
          return err.response;
        }
}

// export async function makeLoginData() {
//         return '3030401c-c5a5-43c8-8b73-2ab9e6f2ca22';
// }

export const makeLoginData = async (usuario, password) => {
  let data = null;
  
  var f = new FormData();
  f.append("usuario", usuario);
  f.append("contrasena", password);

  await axios.post("http://localhost/Backend2/index.php?c=usuarios&a=login", f)
    .then(response => {
      data = (response.data[0].rol);
    })
    .catch(error => console.log("Error = ", error))
    
  return data;
}

export async function getUsers(){
  const response = await axios.get('http://localhost/Backend2/index.php');
  return response.data;
}