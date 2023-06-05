import axios from "axios";
import {onMounted, ref} from "vue";

const token=localStorage.getItem('token');
const tasks=ref([])

const headers = {
    'Authorization': `Bearer ${token}`,
};
const getTodos=async () =>{

    const res = await axios.get('http://127.0.0.1:8000/api/show-tasks', {
        headers
    });
    console.log(res)
    if(res.status===200){
        tasks.value=  res.data

    }
}

export default { getTodos,tasks}
