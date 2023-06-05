import axios from "axios";
import {ref} from "vue";
const todo=ref('')
const addtodo=ref('')

const token=localStorage.getItem('token');
const head = {
    'Authorization': `Bearer ${token}`,
};
// const getTodos
const submit=async ()=> {
    console.log(todo)
    const formData = new FormData();
    formData.append('todo', todo.value);
    const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData,{headers:head});
    if(res.status==200){
        // getTodos()
        addtodo.value=false
    }
}

export default {submit,todo}