import axios from "axios";
import {ref} from "vue";
const reviews = ref([]);
const review=ref('')
const review_id=ref('')
const error = ref(null);


const token=localStorage.getItem('token');
const head = {
  'Authorization': `Bearer ${token}`,
};
function clearFields(){
  review.value=null
}
function showReview(){
  reviews.value=true
}
const submitReview = async () => {
  // alert(id)

  if(review.value === null || review.value.trim() === ''){
      error.value = 'review cannot be empty';
  }
  else{
      showSuccess.value = true
      const formData = new FormData();

      formData.append('description', description.value);
      formData.append('review_id', review_id.value);
      
      const res = await axios.post('http://127.0.0.1:8000/api/addReview', formData, { headers: headers });
      if (res.status === 200) {
          getReviews();
          clearFields()
          review_id.value=null
          review.value=null

      }
  }

};
const getReviews = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/get-reviews',{headers:head});
  reviews.value = response.data
}
function show_single_review(){
  alert("hello");
}
const editreviews=ref([])

function editReview (id){
  editreviews.value = reviews.value.filter(reviews => reviews.id === id);
  // console.log(editreviews.description);

}
const  markComplete = async (id)=>{
  // alert(id)
  const res = await axios.get(`http://127.0.0.1:8000/api/mark_completed/${id}`,{
    headers:head
  });
  if(res.status==200) {
    alert('edited successfully')
    // console.log(taskstoedit.value)
  }
  else {
    alert('error in network')
  }
}
export  default {editreviews, markComplete, reviews,editReview, getReviews, show_single_review,showReview,submitReview,error,review_id };