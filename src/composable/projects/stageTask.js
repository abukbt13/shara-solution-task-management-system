
import axios from "axios"
import {onMounted, ref} from "vue";
import tasks from "@/views/Tasks/Tasks.vue";
const active_tasks=ref([])
const pending_tasks=ref([])
const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};

export function stageTask(){
    const get_Active_Tasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/admin/projects/active_tasks',{headers})
        if(res.status===200)
        {
        console.log(res)
            active_tasks.value=  res.data
        }
    }
    const get_Pending_Tasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/admin/projects/pending_tasks',{headers})
        if(res.status===200)
        {
        console.log(res)
            pending_tasks.value=  res.data
        }
    }
    onMounted(()=>{
        get_Active_Tasks()
        get_Pending_Tasks()
    })
    return{active_tasks,pending_tasks}
}