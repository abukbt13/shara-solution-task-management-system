import axios from "axios";
import {ref} from "vue";

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};
const userName = ref('');
const UserProfile=ref([]);
async function fetchUserName() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', {
    headers
  });
    UserProfile.value = response.data;
    userName.value = response.data.name;
  } catch (error) {
    console.error('Error fetching user name:', error);
  }
}

export default {userName,fetchUserName,UserProfile}