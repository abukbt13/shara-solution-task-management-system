import axios from "axios";
import {headers} from "@/composable/headers";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
export function taskInProjects() {

    const route = useRoute()
    const project_id = ref('');
    project_id.value=route.params.id
    const user_projects_tasks = ref([]);
    async function active_projects(project_id) {

        const response = await axios.get(`http://127.0.0.1:8000/api/projects/active_tasks/${project_id}`, { headers });
        if (response.status === 200) {
            user_projects_tasks.value = response.data;
        }
    }
    const mark_complete = async (id) =>{
        // alert(id)
        const res = await axios.get(`http://127.0.0.1:8000/api/projects/mark_complete/${id}`, { headers });
        if (res.status === 200) {
            alert('Marked Complete successfully')
        }
    }
    onMounted(() => {
        active_projects(project_id.value);
    });
     return {project_id, mark_complete,user_projects_tasks };
}
