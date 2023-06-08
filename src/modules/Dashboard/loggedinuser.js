import axios from "axios";
import {ref} from "vue";
import { useRouter } from "vue-router";

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};

const userName = ref('');
const router = useRouter();
const userEmail=ref([]);
async function fetchUserName() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
    headers
  });
   userEmail.value = response.data.email;
    userName.value = response.data.name;
  } catch (error) {
    console.error('Error fetching user name:', error);
  }
}
const logoutUser = async () => {
  try {

   await axios.get('http://127.0.0.1:8000/api/logout',{headers:headers});
   
    localStorage.removeItem('token')
    if(!token){
      router.push('/login');
    }
   
  } 
  
  catch (error) {
    console.error('Error fetching user name:', error);
  }
};

export default {userName,fetchUserName,userEmail, logoutUser}