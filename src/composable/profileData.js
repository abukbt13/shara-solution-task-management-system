import axios from "axios";
import {onMounted, ref} from "vue";

import { headers, token } from '@/composable/headers';

export function profileData(){
const name=ref('')
const email=ref('')
const phone=ref('')
const address=ref('')
const photo=ref('')
const getProfile = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/getProfile',{headers});
    if(response.status===200){
    name.value = response.data.name
    email.value = response.data.email
    phone.value = response.data.phone
    address.value = response.data.address
    photo.value = response.data.photo
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

onMounted(()=>{
    getProfile()
})
return {name,email,phone,address,photo,updateUser}
}