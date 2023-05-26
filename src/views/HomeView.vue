<template>
  <nav>
    <a href="" class="btn btn-secondary">About</a>
    <a href="" class="btn btn-secondary mx-2">About</a>

    <a href="" class="btn btn-secondary">About</a>

  </nav>
  <div class="container">
    
        <h2 class="text-center text-decoration-underline">My todays planning 26/05/2023</h2>
        <p class="text-center text-decoration-underline">Good morning Benard</p>
        <div class="main d-flex ">
          <div class="tasks w-50">
            <p>hello teee</p>
              <h2>Todays Tasks</h2>
          </div>
          <div class="reviews">
            <div class="get-review">
              <h2 class="text-align-left">Reviews</h2>
              <ol>
                <li>22/05/2023 <span>Wednesday</span></li>
                <li>22/05/2023 <span>Wednesday</span></li>
                <li>22/05/2023 <span>Wednesday</span></li>
                <li>22/05/2023 <span>Wednesday</span></li>
              </ol>
            </div>
             <div class="notes">
              <p>Drafts</p>
              <textarea name="drafts" id="drafts" cols="30" rows="3" placeholder="draft anything here"></textarea>
             </div>
             <div class="add-review">
              <p>How was your day</p>
              <textarea name="review" id="review" cols="30" rows="3" placeholder="describe your experience or say something concerning this "></textarea>
             <br> <button class="btn btn-sm btn-secondary">add review</button>
            </div>
          </div>
          
        </div>
</div>

</template>

<script>
// @ is an alias to /src

</script>
<style>
nav{
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  border: 3px solid black;
  border-style: dashed;
}
.main{
  width: 100vw;
  height: 73vh;
}
</style>