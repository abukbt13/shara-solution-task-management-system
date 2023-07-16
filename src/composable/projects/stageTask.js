
import axios from "axios"
import {onMounted, ref} from "vue";
import tasks from "@/views/Tasks/Tasks.vue";
const active_tasks=ref([])
const pending_tasks=ref([])
const completed_tasks=ref([])
const revision_tasks=ref([])
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
    const mark_Task_complete= async (id) =>{

        const res = await axios.get(`http://127.0.0.1:8000/api/admin/projects/mark_task_complete/${id}`,{headers})
        if(res.status===200)
        {
        // console.log(res)
        //     window.reload()
        }
    }
    const mark_Task_Revision= async (id) =>{

        const res = await axios.get(`http://127.0.0.1:8000/api/admin/projects/mark_task_revision/${id}`,{headers})
        if(res.status===200)
        {
        // console.log(res)
        //     window.reload()
        }
    }
    const completed_Task= async () =>{

        const res = await axios.get(`http://127.0.0.1:8000/api/admin/projects/completed_tasks`,{headers})
        if(res.status===200)
        {
            completed_tasks.value=  res.data
        }
    }
    const revision_Task= async () =>{

        const res = await axios.get(`http://127.0.0.1:8000/api/admin/projects/revision_tasks`,{headers})
        if(res.status===200)
        {
            revision_tasks.value=  res.data
        }
    }
    onMounted(()=>{
        get_Active_Tasks()
        revision_Task()
        completed_Task()
        get_Pending_Tasks()
    })
    return{active_tasks,mark_Task_complete,mark_Task_Revision,revision_tasks,completed_tasks,pending_tasks}
}