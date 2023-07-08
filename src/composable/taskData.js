
import axios from "axios";
import {onMounted, ref} from "vue";

import { headers, token } from '@/composable/headers';
import Swal from "sweetalert2";


const tasks = ref([]);
const completed_tasks = ref([]);
const todo = ref(null);
const todo_id = ref(null);
const task_type = ref('My Task');
const title = ref(null);
const error = ref(null);
const showSuccess =ref(false)
const todo_name =ref('')
const trashed_tasks =ref('')
const user_projects_tasks =ref('')
const task_description =ref('')
export function taskData(){
    const message = ref('')
    function clearMessage(){
        showSuccess.value=false
    }
    function clearTask(){
        todo.value =''
        todo_name.value =''
        error.value =''
    }
    //save a Task
    const submitTodo = async (id) => {
        if(todo_id.value === null){

            if (todo_name.value === null || todo_name.value.trim() === ''  ) {
                error.value = 'Todo cannot be empty ensure you fill all the fields?';
            }
            else{
                const formData = new FormData();

                formData.append('name', todo_name.value);
                formData.append('description', todo.value);
                formData.append('task_type', task_type.value);

                const res = await axios.post('http://127.0.0.1:8000/api/tasks', formData, { headers: headers });
                if (res.status === 200) {

                    showSuccess.value=true
                    message.value='You have successfully created a to do'
                    get_task_athand()
                    clearTask()
                    Swal.fire(
                        'Sucess!',
                        'You have created a todo',
                        'success'
                    )
                }
            }
        }
        else {
            if (todo_name.value === null || todo_name.value.trim() === ''  ) {
                error.value = 'Todo cannot be empty ensure you fill all the fields?';
            } else {


                const formData = new FormData();
                formData.append('name', todo_name.value);
                formData.append('description', todo.value);
                formData.append('task_type', task_type.value);

                const res = await axios.post(`http://127.0.0.1:8000/api/update-tasks/${todo_id.value}`, formData, {headers});
                if (res.status === 200) {
                    message.value='successfully Updated a task'
                    showSuccess.value=true
                    get_task_athand()
                    clearTask()
                }
            }
        }


    }
    // Get tasks for logged in User

    const get_completed_tasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_user_completed_tasks', {
            headers
        });
        if(res.status===200){
            completed_tasks.value=  res.data
        }
    }

    const get_task_athand = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_user_tasks', {
            headers
        });
        if(res.status===200){
            tasks.value=  res.data
        }
    }
    const trashed_Tasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/trashed_tasks', {
            headers
        });
        if(res.status===200){
            trashed_tasks.value=  res.data
        }
    }

    const get_active_tasks =async()=>{
        const response=await axios.get('http://127.0.0.1:8000/api/show_active_tasks', {headers});
        if(response.status===200){
        }
    }
    const get_user_tasks_in_projects =async()=>{
        const response=await axios.get('http://127.0.0.1:8000/api/fetchUserProjects', {headers});
        if(response.status===200){
            user_projects_tasks.value=response.data
        }
    }

    const deleteTask=async (id)=>{
        // alert(id)
        const response = await axios.get(`http://127.0.0.1:8000/api/delete_tasks/${id}`);
        if(response.status===200){
            get_task_athand()
            message.value='You have succesfully deleted the task'

            console.log(response.data)
            // getTodos()

        }
    }


    function edit_Todo(task){
        title.value='Edit Todo'
        todo.value=task.description
        todo_name.value=task.todo
        todo_id.value=task.id
    }

    const  markComplete = async (id)=>{
        // alert(id)
        const res = await axios.get(`http://127.0.0.1:8000/api/mark_completed/${id}`,{
            headers
        });
        if(res.status===200) {
            message.value='Task have been completed successfully'
            get_task_athand()

        }
        else {
            alert('error in network')
            get_task_athand()
        }
    }
    onMounted(()=>{
        get_completed_tasks()
            get_task_athand()
        trashed_Tasks()
        get_user_tasks_in_projects()
    })
 return{todo,todo_id,clearMessage,message,todo_name,task_description,error,user_projects_tasks,get_user_tasks_in_projects,trashed_tasks,trashed_Tasks,showSuccess,clearTask,tasks,completed_tasks,markComplete,submitTodo,task_type,title,get_completed_tasks,get_task_athand,deleteTask,edit_Todo}
}