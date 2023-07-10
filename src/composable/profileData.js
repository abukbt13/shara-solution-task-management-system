import axios from "axios";
import {onMounted, ref} from "vue";

import { headers, token } from '@/composable/headers';

export function profileData(){
const name=ref('')
const email=ref('')
const phone=ref('')
const address=ref('')
const photo=ref('')
const user_id=ref('')
const getProfile = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/getProfile',{headers});
    if(response.status===200){
    name.value = response.data.name
    user_id.value = response.data.user_id
    email.value = response.data.email
    phone.value = response.data.phone
    address.value = response.data.address
    photo.value = response.data.photo
    }
}
const captureImage=(e)=>{
    photo.value =  e.target.files[0]
    // console.log(photo.value);
}
const updateUser= async (id) =>{
    // captureImage()
    // alert('creating new user')

    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('phone', phone.value);
    formData.append('address', address.value);
    formData.append('photo', photo.value);

    const res = await axios.post(`http://127.0.0.1:8000/api/updateUserDetails/${id}`, formData,{ headers: headers });
    if(res.status === 200){
        getProfile()
    }
}


onMounted(()=>{
    getProfile()
})
return {name,email,phone,captureImage,user_id,address,photo,updateUser}
}