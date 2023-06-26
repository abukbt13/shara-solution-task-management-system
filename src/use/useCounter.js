import {onMounted, ref} from "vue";
import axios from "axios";
const token=localStorage.getItem('token');
const headers = {
 'Authorization': `Bearer ${token}`,
};
export function useCounter() {
 const appTitle = ref('composables');
const vid_name = ref('')
const youtube_link = ref('')
 const numbers = [
  {
   name: 'abu',
   age: 12
  },
  {
   name:'Victor',
   age:89
  },
  {
   name: 'abu',
   age: 12
  },
  {
   name:'Victor',
   age:89
  }
 ];
 const saveYoutubeDetails = async () =>{
  const formData = new FormData();

  formData.append('name', vid_name.value);
  formData.append('link', youtube_link.value);


  const res = await axios.post('http://127.0.0.1:8000/api/save_youtube_video', formData, { headers });
  if (res.status === 200) {
   alert('success you created a video link')
  }
 }
 const youtubes=ref([])
 const getYoutube = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/show_youtube_video',{headers});
  youtubes.value = response.data
  // console.log(response.data)
 }
 onMounted(() =>{
  getYoutube()
 })

 return {
  saveYoutubeDetails,
  getYoutube,
  youtubes,
  appTitle,
  numbers
 };
}