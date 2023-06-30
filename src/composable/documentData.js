import {onMounted, ref} from "vue";

const doc_name=ref('')
const doc_description=ref('')

import {headers,token} from "@/composable/headers";
import axios from "axios";
const filename = ref('')
const google_link = ref('')
const google_name = ref('')
const google_description = ref('')
const google_documents = ref([])
const local_documents = ref([])
export function documentData(){
    const onFileChange=(e)=>{
        filename.value=e.target.files[0];
    }
    const saveLocalDocument=async () => {
        const formData = new FormData();
        formData.append('name', doc_name.value);
        formData.append('description', doc_description.value);
        formData.append('filename', filename.value);

        const res = await axios.post('http://127.0.0.1:8000/api/upload_local_document', formData, {headers});
        if (res.status == 200) {
            alert('success')
            // router.push('/dashboard')

        }
    }

    const saveGoogleDocument=async () => {

        const formData = new FormData();
        formData.append('google_link', google_link.value);
        formData.append('google_name', google_name.value);
        formData.append('description', google_description.value);

        const res = await axios.post('http://127.0.0.1:8000/api/upload_google_document', formData, {headers});
        if (res.status == 200) {
            alert('cgvhgbjkl;')
            // alert('success')

        }
    }
    const showGoogleDocuments = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_google_documents', {
            headers
        });
        if(res.status===200){
            google_documents.value=  res.data
        }
    }
    const showLocalDocuments = async () =>{
        const res = await axios.get('http://127.0.0.1:8000/api/show_local_documents', {
            headers
        });
        if(res.status===200){
            local_documents.value=  res.data
        }
    }
    onMounted(()=>{
        showGoogleDocuments()
        showLocalDocuments()
    })
    return{saveLocalDocument,local_documents,google_documents,showGoogleDocuments,google_name,google_link,google_description,saveGoogleDocument,filename,onFileChange,doc_name,doc_description}

}