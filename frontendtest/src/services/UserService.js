import axios from 'axios';

const USER_LIST_URL="http://localhost:8080/api/users";
const CREATE_USER_LIST_URL="http://localhost:8080/api/save-user";

class UserService{
    getUser(){
        return axios.get(USER_LIST_URL);
    }
    createUser(user){
        return axios.post(CREATE_USER_LIST_URL,user);
    }
    getUserById(userId){
        return axios.get(USER_LIST_URL+'/'+userId);
    }
    updateUser(user,userId){
        return axios.put(USER_LIST_URL+'/'+userId,user);
    }
    deleteUser(id){
        return axios.delete(USER_LIST_URL+'/'+id);
    }
}
export default new UserService();