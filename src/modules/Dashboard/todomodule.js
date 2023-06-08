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
const deleteTask=async (id)=>{
    // alert(id)
    const response = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
    if(response.status===200){
        console.log(response.data)
        alert()
    }
}

const todo = ref(null);
const todo_id = ref(null);
const error = ref(null);

const submitTodo = async () => {
  const formData = new FormData();

    formData.append('todo', todo.value.trim());
        formData.append('todo_id', todo_id.value);
    
        const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData, { headers: headers });
        if (res.status === 200) {
          getTodos();
        }
};


function edit_Todo(id){

    todo_id.value=id

   const todo_to_edit = tasks.value.filter(tasks=>tasks.id === id)


    if (todo_to_edit.length > 0) {
        todo.value = todo_to_edit[0].todo; // Replace "name" with the desired property
    } else {
        // Handle case when no matching task is found
    }
}


export default { getTodos,submitTodo,deleteTask,tasks,todo,edit_Todo,todo_id,error}
