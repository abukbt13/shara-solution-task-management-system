import axios from "axios"
import {ref} from "vue";
const users = ref([])
const admins = ref([])

const token=localStorage.getItem('token');
const headers = {
    'Authorization': `Bearer ${token}`,
};
const getAdmins=async () =>{
    const res = await axios.get('http://127.0.0.1:8000/api/show_admins', {
        headers
    });
    // console.log(res)
    if(res.status===200){
        admins.value =  res.data
    }
}
const getUsers=async () =>{
    const res = await axios.get('http://127.0.0.1:8000/api/show_users', {
        headers
    });
    console.log(res)
    if(res.status===200){
        users.value =  res.data
        console.log()
    }
}
// fetching from db ends here

// finding single user
const username = ref('')
const name = ref('')
const message = ref('')
const user_id = ref('')
const phone = ref('')
const address = ref('')
const email = ref('')
const role = ref('user')

// function editUser(id){

// alert(id)
    // user_id.value=id

    // const user_to_edit = users.value.filter(users=>users.id === id)
    // // console.log(user_to_edit)

    // if (user_to_edit.length > 0) {
    //     phone.value = user_to_edit[0].phone; 
    //     address.value = user_to_edit[0].address; 
    // } else {
    //     // Handle case when no matching task is found
    // }
    // console.log(user)
// }
function assignRole(value){
    role.value=value
}

const saveUser = async () => {
    // alert('creating new user')

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('role', role.value);

    const res = await axios.post('http://127.0.0.1:8000/api/create_users', formData,{ headers: headers });
    if(res.status === 200){
        getUsers()
        // Clear the fields
        name.value = '';
        phone.value = '';
        address.value = '';
    }
}


const updateUser= async (id) =>{
    // alert('creating new user')

    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('phone', phone.value);
    formData.append('address', address.value);

    const res = await axios.post(`http://127.0.0.1:8000/api/updateUserDetails/${id}`, formData,{ headers: headers });
    if(res.status === 200){
        getUsers()
    }
}
function editUser (user){
    name.value=user.name;
    user_id.value=user.id;
    phone.value=user.phone;
    address.value=user.address;
   
}
function editAdmin (admins){
    name.value=admins.name;
    user_id.value=admins.id;
    phone.value=admins.phone;
    address.value=admins.address; 
}
const updateAdmin = async (id) => {
    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('phone', phone.value);
    formData.append('address', address.value);

    const res = await axios.post(`http://127.0.0.1:8000/api/updateUserDetails/${id}`, formData, { headers: headers });

    if (res.status === 200) {
        getAdmins();

    }
}

const deleteUser=async (id)=>{
    // alert(id)
    const response = await axios.get(`http://127.0.0.1:8000/api/deleteUser/${id}`,{headers});
    if(response.status===200){
        getAdmins()
        message.value='You have succesfully deleted the task'

        console.log(response.data)
        // getTodos()

    }
}





export default {message,deleteUser,getUsers,updateUser,updateAdmin,assignRole,users,admins,name,phone,address,editUser,getAdmins,editAdmin,saveUser,role,username,email,user_id}