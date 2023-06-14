import axios from "axios"
import {ref} from "vue";
const name = ref([])
const description = ref([])

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};

const createProject = async () => {
    // alert('creating new user')

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('description', description.value);

    const res = await axios.post('http://127.0.0.1:8000/api/addUserToProject', formData,{ headers: headers });
    if(res.status === 200){
    }
}
export default{name,description,createProject}