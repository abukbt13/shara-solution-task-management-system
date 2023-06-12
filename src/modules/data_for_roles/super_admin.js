import axios from "axios"
import {ref} from "vue";
const users = ref([])

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};
// alert('')
// fetching from db starts here
const getUsers=async () =>{


    const res = await axios.get('http://127.0.0.1:8000/api/show-users', {
        headers
    });
    // console.log(res)
    if(res.status===200){
        users.value =  res.data
    }
}
// fetching from db ends here

// finding single user
const username = ref('')
const user_id = ref('')
const email = ref('')
const role = ref('')

function editUser(id){

// alert(id)
    user_id.value=id

    const user_to_edit = users.value.filter(users=>users.id === id)
        // console.log(user_to_edit)

    if (user_to_edit.length > 0) {
        username.value = user_to_edit[0].name; // Replace "name" with the desired property
        email.value = user_to_edit[0].email; // Replace "name" with the desired property
    } else {
        // Handle case when no matching task is found
    }
    // console.log(user)
}


// finding single user ends here
export default {getUsers,users,editUser,role,username,email,user_id}