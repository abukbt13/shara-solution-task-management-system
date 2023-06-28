
   /*
   This is used to create a reusable headers/
    */
    export const token = localStorage.getItem('token');

    export const headers = {
        'Authorization': `Bearer ${token}`,
    };