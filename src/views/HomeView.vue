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
          <div class="tasks w-50 justify-content-center d-flex flex-column align-items-center">
              <h2>Todays Tasks</h2>
              <ol class="todays">
                <li class="one">Take Breakfast</li>
                <li>Do some cleaning</li>
                <li>Do some cleaning</li>
                <li>Do some cleaning</li>
                <li>Do some cleaning</li>
                <li>Start Coding</li>

              </ol>
              <div class="weeklytheme">
                <h3>Weekly Theme</h3>
                <ol class="theme">
                  <li>Do something new everyday</li>
                  <li>Earth is hard</li>
                </ol>
              </div>
              <div class="yearlytheme">
                <h3>Theme of the year</h3>
                <ol class="theme">
                  <li>To be a whole rounded person</li>
                  <li>Make one step at a time</li>
                </ol>
              </div>
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
  background-color: yellow;
}
.main{
  width: 100vw;
  height: 73vh;
}
.todays li{
  background: #ffe5e5;
  color: darkred;
  padding: 5px;
  margin-left: 35px;
}
</style>