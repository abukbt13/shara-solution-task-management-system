import axios from "axios";
import {headers} from "@/composable/headers";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const project_id = ref('');
project_id.value=route.params.id
const user_projects_tasks = ref([]);

export function taskInProjects() {


    async function active_projects(project_id) {

        const response = await axios.get(`http://127.0.0.1:8000/api/projects/active_tasks/${project_id}`, { headers });
        if (response.status === 200) {
            user_projects_tasks.value = response.data;
        }
    }
    onMounted(() => {
        active_projects(project_id.value);
    });
     return { active_projects, project_id, user_projects_tasks };
}
