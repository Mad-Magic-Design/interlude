import axios from "axios";
const address= process.env.API_ADDRESS

const axiosClient = axios.create({
    baseURL: `https://api.example.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  export function getInterlude (iid){
    return axiosClient.get(`${address}/interlude/${iid}`)
  }
  
  export function createInterlude (partyName, creator, userId){
    return axiosClient.post(`${address}/interlude`, {
      partyName, creator, userId})
  }
  export function updateField (iid, field, info){
    return axiosClient.put(`${address}/interlude/update/${iid}`, {
      field, info
        }
      )}
  export function createAct (iid, act){
    return axiosClient.post(`${address}/interlude/createact/${iid}`, {
      act})
  }
  export function updateAct (iid, act, index){
    return axiosClient.put(`${address}/interlude/updateact/${iid}`, {
      act, index
        }
      )}