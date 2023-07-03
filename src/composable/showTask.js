import axios from "axios";

import {headers} from "@/composable/headers";

import {onMounted, ref} from "vue";
const mytasks = ref([])
export function showTask(){
    const showmytasks = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_user_tasks', {
            headers
        });
        if(res.status===200){
            mytasks.value=  res.data
        }
    }
    function greetings(){
        alert('Good evening devs')
    }
    onMounted(()=>{
        showmytasks()
    })
    return{
        greetings,
        showmytasks,mytasks
    }
}