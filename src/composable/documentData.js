import {ref} from "vue";

const google_link=ref('')
const doc_name=ref('')
const doc_description=ref('')
const filename=ref('')

import {headers,token} from "@/composable/headers";
import axios from "axios";

export function documentData(){
    function captureFile(event){
        filename.value= event.target.files[0];
    }
    const saveLocalDocument = async ()=>{
        console.log(filename)
        const formData = new FormData();
        formData.append('name', doc_name.value);
        formData.append('description', doc_description.value);
        formData.append('filename', filename.value);
        const res = await axios.post('http://127.0.0.1:8000/api/upload_local_document', formData, { headers });
        if (res.status === 200) {
            alert('success you created a goal')
        }
    }
    return{saveLocalDocument,doc_name,doc_description,google_link,filename}
}