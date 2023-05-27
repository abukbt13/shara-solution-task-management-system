<template>
  <nav>
    <a href="" class="btn btn-secondary">Home</a>
    <a href="" class="btn btn-secondary mx-2">About</a>
    <a href="" class="btn btn-secondary">Logout</a>

  </nav>
  <div class="container">
    
        <h2 class="text-center text-decoration-underline">My todays planning 26/05/2023</h2>
        <p class="text-center text-decoration-underline">Good morning Benard</p>
        <div class="main d-flex ">
          <div class="tasks w-50 justify-content-center d-flex flex-column align-items-center">
              <h3>Todays Tasks</h3>
            <div class="card-body">
              <div class="d-flex flex-row align-items-center">
                    <input type="text" class="form-control form-control-md" id="exampleFormControlInput1"
                      placeholder="Add new task...">
                    <div>
                      <button type="button" class="btn btn-primary">Add</button>
                    </div>
                  </div>
              <table class="table mb-8">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Prepare breakfast</td>
                  <td>In progress</td>
                  <td>
                    <a href="/" data-mdb-toggle="edit" title="Edit">
                      <i class="fas fa-pencil-alt" @click="editItem" style="font-size: 20px; "></i>
                    </a>
                      &nbsp;
                    <a href="/" data-mdb-toggle="delete" title="Delete">
                      <i class="fas fa-trash-alt" @click="deleteItem" style="font-size: 20px; "></i>
                    </a> 
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Watch news</td>
                  <td>In progress</td>
                  <td>
                    <a href="/" data-mdb-toggle="edit" title="Edit">
                      <i class="fas fa-pencil-alt" @click="editItem" style="font-size: 20px; "></i>
                    </a>
                      &nbsp;
                    <a href="/" data-mdb-toggle="delete" title="Delete">
                      <i class="fas fa-trash-alt" @click="deleteItem" style="font-size: 20px; "></i>
                    </a> 
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Take online course</td>
                  <td>In progress</td>
                  <td>
                    <a href="/" data-mdb-toggle="edit" title="Edit">
                      <i class="fas fa-pencil-alt" @click="editItem" style="font-size: 20px; "></i>
                    </a>
                      &nbsp;
                    <a href="/" data-mdb-toggle="delete" title="Delete">
                      <i class="fas fa-trash-alt" @click="deleteItem" style="font-size: 20px; "></i>
                    </a> 
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
              <div class="weeklytheme">
                <h3 style="text-align: center;">Weekly Theme</h3>
                <figure class="text-center mb-0">
                  <blockquote class="blockquote">
                    <p class="pb-3">
                      <i class="fas fa-quote-left fa-xs text-primary"></i>
                      <span class="lead font-italic">Many of life's failures are people who did not realize how
                    close they were to success when they gave up.</span>
                  <i class="fas fa-quote-right fa-xs text-primary"></i>
                </p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0">
                Thomas Edison
              </figcaption>
            </figure>
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
  background-color: #eafae3;
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
.weeklytheme{
  width: 30vw;
  height: 73vh;
}
</style>