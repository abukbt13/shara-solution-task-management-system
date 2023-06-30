import axios from "axios";
import {onMounted, ref} from "vue";

import { headers, token } from '@/composable/headers';

const truncatedLength = ref('10')
const reviews = ref([])
const description = ref('')
export function reviewsData(){
    const submitReview = async () => {

        if(description.value === null || description.value.trim() === ''){
            reviewerror.value = 'description cannot be empty ?';
        }
        else{
            // showSuccess.value = true
            const formData = new FormData();

            formData.append('description', description.value);


            const res = await axios.post('http://127.0.0.1:8000/api/addReview', formData, { headers });
            if (res.status === 200) {
                // getReviews();
                // review_id.value=null
                description.value=null

            }
        }

    };

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/get-reviews',{headers});
        reviews.value = response.data
    }
    function truncatedDescription(description) {
        if (description.includes(reviewsData)) {
            return description;
        } else {
            const words = description.split(' ');
            if (words.length > truncatedLength.value) {
                return words.slice(0, truncatedLength.value).join(' ');
            } else {
                return description;
            }
        }
    }
    function viewReview(review){
        description.value=review.description
    }

    onMounted(()=>{
        getReviews()
    })
    return{
        submitReview,
        viewReview,
        reviews,
        description,
        truncatedDescription,
        getReviews
    }

}
