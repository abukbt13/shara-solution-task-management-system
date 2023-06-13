import axios from "axios";
import {ref} from "vue";

const  name = ref('')
const  email = ref('')
const  password = ref('')
const  c_password = ref('')
const  role = ref('user')
const  role_id = ref('1')

const saveUser = async () => {
    alert('creating new user')
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('c_password', c_password.value);
    formData.append('role', role.value);
    formData.append('role_id', role_id.value);

    const res = await axios.post('http://127.0.0.1:8000/api/register', formData);


}


export default {saveUser}