import axios from "axios";
const address= process.env.API_ADDRESS

const axiosClient = axios.create({
    //baseURL: `https://interlude-backend.vercel.app`,
    baseURL: `http://localhost:5000`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  export function signupUser (userInfo){
    console.log('address', address)
    return axiosClient.post(`/user/signup`, userInfo)
  }
  export function signinUser (userInfo){
    return axiosClient.post(`/user/signin`, userInfo)
  }

  export function updateUser (uid, field, info){
    return axiosClient.post(`/user/update/${uid}`, {
      field, info
      
    })
  }
  export function pushUser (uid, field, info){
    return axiosClient.post(`/user/push/${uid}`, {
      field, info
        }
      )}

      export function getUserDoc (uid){
        return axiosClient.get(`/user/get/${uid}`)
      }





