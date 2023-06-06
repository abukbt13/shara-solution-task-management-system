import {ref} from 'vue'
import axios from 'axios'

const currentDate=ref('');
function updateCurrentDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.value = now.toLocaleDateString('en-US', options);
}

export default {currentDate,updateCurrentDate}