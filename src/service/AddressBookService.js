import axios from "axios";
const BASE_URL = "http://localhost:8080/addressbook";
const USER_URL = "http://localhost:8080/user";

class AddressBookService {

  getAllContacts() {
    return axios.get(`${BASE_URL}/getall`);
  }

  addContact(data) {
    return axios.post(`${BASE_URL}/add`, data);
  }

  deleteContact(token) {
    return axios.delete(`${BASE_URL}/delete/${token}`);
  }
 
  updateContact(token, data) {
    return axios.put(`${BASE_URL}/edit/${token}`, data);
  }

  getContact(token) {
    return axios.get(`${BASE_URL}/getbyid/${token}`);
  }

  addUser(data){
    return axios.post(`${USER_URL}/register`, data);
  }

  login(email,password){
    return axios.post(`${USER_URL}/login/${email}/${password}`);
  }

  getUser(id){
    return axios.get(`${USER_URL}/getbyid/${id}`);
  }

  sortCity(){
    return axios.get(`${BASE_URL}/sortbycity`);
  }

  sortState(){
    return axios.get(`${BASE_URL}/sortbystate`);
  }

  search(name){
    return axios.get(`${BASE_URL}/searchby/${name}`);
  }
}
export default new AddressBookService();
