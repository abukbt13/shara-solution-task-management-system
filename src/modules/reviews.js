import axios from "axios";
import {ref} from "vue";
const reviews = ref([]);

const token=localStorage.getItem('token');
const head = {
  'Authorization': `Bearer ${token}`,
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

export  default {editreviews, reviews,editReview, getReviews, show_single_review };