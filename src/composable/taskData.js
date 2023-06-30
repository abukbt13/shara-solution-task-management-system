
import axios from "axios";
import {onMounted, ref} from "vue";


import { headers, token } from '@/composable/headers';


const tasks = ref([]);
const completed_tasks = ref([]);
const todo = ref(null);
const todo_id = ref(null);
const task_type = ref('My Task');
const title = ref(null);
const error = ref(null);
const showSuccess =ref(false)
const description =ref('')
export function taskData(){

    const getuserTasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_user_completed_tasks', {
            headers
        });
        if(res.status===200){
            completed_tasks.value=  res.data
        }
    }

    const get_Completed_UserTasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_user_tasks', {
            headers
        });
        if(res.status===200){
            tasks.value=  res.data
        }
    }

    const deleteTask=async (id)=>{
        // alert(id)
        const response = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`);
        if(response.status===200){
            console.log(response.data)
            // getTodos()

        }
    }


    function edit_Todo(task){
        title.value='Edit Todo'
        todo.value=task.todo
        todo_id.value=task.id
    }
    const submitTodo = async (id) => {
        if(todo_id.value === null){

            if(todo.value === null || todo.value.trim() === ''){
                error.value = 'Todo cannot be empty';
            }
            else{
                const formData = new FormData();

                formData.append('todo', todo.value);
                formData.append('task_type', task_type.value);

                const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData, { headers: headers });
                if (res.status === 200) {
                    todo_id.value=null
                    todo.value=null
                }
            }
        }
        else {
            if (todo.value === null || todo.value.trim() === '') {
                error.value = 'Todo cannot be empty';
            } else {


                const formData = new FormData();

                formData.append('todo', todo.value);

                const res = await axios.post(`http://127.0.0.1:8000/api/update-tasks/${todo_id.value}`, formData, {headers});
                if (res.status === 200) {
                    todo_id.value = null
                    todo.value = null
                }
            }
        }


    }

    const  markComplete = async (id)=>{
        // alert(id)
        const res = await axios.get(`http://127.0.0.1:8000/api/mark_completed/${id}`,{
            headers
        });
        if(res.status==200) {
            alert('edited successfully')
        }
        else {
            alert('error in network')
        }
    }
    onMounted(()=>{
            getuserTasks(),
            get_Completed_UserTasks()
    })
 return{todo,todo_id,tasks,completed_tasks,markComplete,submitTodo,task_type,title,showSuccess,getuserTasks,get_Completed_UserTasks,deleteTask,edit_Todo}
}