import axios from "axios";
import {ref} from "vue";
import { useRouter } from "vue-router";

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};

const userName = ref('');
const rout = useRouter();
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
function logoutUser  () {


   const res =  axios.get('http://127.0.0.1:8000/api/logout',{headers:headers});

    localStorage.removeItem('token')
      window.location='/login'

}

export default {userName,fetchUserName,userEmail, logoutUser}