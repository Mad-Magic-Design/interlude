import axios from "axios";
const address= process.env.API_ADDRESS

const axiosClient = axios.create({
  baseURL: `http://localhost:5000`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  export function getInterlude (iid){
    return axiosClient.get(`/interlude/${iid}`)
  }
  
  export function createInterlude (partyName, title, description, prompt, creator, userId){
    return axiosClient.post(`/interlude/create`, {
      partyName, title, description, prompt, creator, userId})
  }
  export function updateField (iid, field, info){
    return axiosClient.put(`/interlude/update/${iid}`, {
      field, info
        }
      )}
  export function createAct (iid, act){
    return axiosClient.post(`/interlude/createact/${iid}`, {
      act})
  }
  export function updateAct (iid, act, index){
    return axiosClient.put(`/interlude/updateact/${iid}`, {
      act, index
        }
      )}