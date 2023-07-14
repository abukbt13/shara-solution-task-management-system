<script setup>

</script>
<template>
  <div class="row">
    <div class="col">
      <h2 class="text-center">Weekly Goals</h2>
      <button data-bs-toggle="modal" data-bs-target="#weekly_goals"  class="btn btn-primary">
        <span>
          <i class="fa fa-lg fa-plus"></i>
        </span>
        Add WeeklyGoal
      </button>
   
    </div>
    <div class="col">
      <h2 class="text-center">Yearly Goals</h2>
      <button data-bs-toggle="modal" data-bs-target="#yearly_goals" class="btn btn-primary">
        <span>
          <i  class="fa fa-lg fa-plus"></i>        </span>
        Add YearlyGoal
      </button>

    </div>

  </div>
  <div class="row text-center">
    <p>Hello world how do you do</p>
    <div class="row">
      <div class="col col-sm-2 col-lg-12">hjdhwekhfj</div>
    </div>
  </div>
    


<!-- Modal for adding weekly goals  -->
        <div class="modal fade" id="weekly_goals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <form @submit.prevent="saveWeeklyGoal">
            <label class="text-uppercase" for="">Create Weekly Goal here</label>
            <textarea name="todo" v-model="weeklygoal" id="" cols="20" rows="3" class="form-control" placeholder="Type your goal here ....."></textarea>
            <span class="text-danger" v-if="error">{{ error }}</span>
            <div class="mt-1 float-end">
              <button   type="submit" class="btn btn-secondary">Add Goal</button>
            </div>
            </form>
          </div>
        </div>
        </div>
        </div>

<!--End  Modal for adding weekly goals  -->

<!-- Yearly modal here-->
      <div class="modal fade" id="yearly_goals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <form @submit.prevent="YearlyGoal">

              <label class="text-uppercase" for="">Create Yearly Goal here</label>
              <textarea v-model="Yearly_goal" id="" cols="20" rows="3" class="form-control" placeholder="Type your goal here ....."></textarea>
              <span class="text-danger" v-if="error">{{ error }}</span>


              <div class="mt-1 float-end">

                <button    type="submit" class="btn btn-secondary">Add Goal</button>

                <!--                        <button v-else  type="button"  class="btn btn-secondary" data-bs-dismiss="modal">Add Goal</button>-->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
<!--         End of    Yearly modal here-->
</template>