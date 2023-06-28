import {onMounted, ref} from "vue";
import axios from "axios";
const token=localStorage.getItem('token');
const headers = {
 'Authorization': `Bearer ${token}`,
};
export function youtube() {
    const vid_name = ref(null)
    const youtube_link = ref('')
    const videoId = ref('')
    const vid_description = ref('')
    const vid_error = ref('')


    const error = ref('')

    function getVideoId() {
        const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)(&(amp;)?[\w\?=]*)?/;
        const match = youtube_link.value.match(regex);
        if (match && match[1]) {
            videoId.value= match[1];
            console.log(videoId)
        } else {
            videoId.value = youtube_link;
        }
    }

    const saveYoutubeDetails = async () =>{
        getVideoId()
        const formData = new FormData();
        if(vid_name.value === null && youtube_link === null){
            // alert('Enter all details')
            vid_error.value='enter all fields'
        }else {
            formData.append('name', vid_name.value);
            formData.append('link', videoId.value);
            formData.append('description', vid_description.value);
            console.log(formData)
            const res = await axios.post('http://127.0.0.1:8000/api/save_youtube_video', formData, { headers });
            if(res){
                alert('success insert')
            }
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
     youtube_link,
     vid_name,vid_description,vid_error,
     saveYoutubeDetails,
     videoId,
  getYoutube,
  youtubes,
  error
 };
}