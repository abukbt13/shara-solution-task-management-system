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
onMounted(()=>{
    getProfile()
})
return {name,email,phone,address,photo}
}