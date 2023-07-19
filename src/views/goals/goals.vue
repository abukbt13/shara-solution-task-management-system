<script setup>
import {goalsData} from "@/composable/goalsData";
const {saveWeeklyGoal,YearlyGoal,weeklygoal,weeklygoals,yearlygoals,Yearly_goal,randomWeekGoals,year_gooals} = goalsData()
</script>
<template>
  <div class="row">
    <div class="col border-end">
      <h2 class="text-center text-decoration-underline text-primary">Weekly Goals</h2>
      <button data-bs-toggle="modal" data-bs-target="#weekly_goals"  class="btn btn-primary">
        <span>
          <i class="fa fa-lg fa-plus"></i>
        </span>
        Add WeeklyGoal
      </button>
      <table class="table table-bordered border-primary">
        <thead>
        <tr>
          <th>Year</th>
          <th>Goal</th>
          <th>time</th>
          <th colspan="2">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="Yearly_goal in weeklygoals" :key="Yearly_goal.id">
          <td>{{Yearly_goal.id}}</td>
          <td>{{Yearly_goal.goal}}</td>
          <td>{{Yearly_goal.time}}</td>
          <td>
            <button data-bs-toggle="modal" data-bs-target="#edit_year_goal" class="btn btn-primary">
              <span>
                <i class="fa fa-lg fa-edit"></i>
              </span>
              Edit
            </button>
            <button data-bs-toggle="modal" data-bs-target="#delete_year_goal" class="btn btn-danger">
              <span>
                <i class="fa fa-lg fa-trash"></i>
              </span>
              Delete
            </button>
          </td>
        </tr>
        </tbody>

      </table>

    </div>
    <div class="col border-start">
      <h2 class="text-center text-decoration-underline text-primary">Yearly Goals</h2>
      <button data-bs-toggle="modal" data-bs-target="#yearly_goals" class="btn btn-primary">
        <span>
          <i  class="fa fa-lg fa-plus"></i>        </span>
        Add YearlyGoal
      </button>

      <table class="table table-bordered border-primary">
        <thead>
        <tr>
          <th>Year</th>
          <th>Goal</th>
          <th>time</th>
          <th colspan="2">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="Yearly_goal in yearlygoals" :key="Yearly_goal.id">
          <td>{{Yearly_goal.id}}</td>
          <td>{{Yearly_goal.goal}}</td>
          <td>{{Yearly_goal.time}}</td>
          <td>
            <button data-bs-toggle="modal" data-bs-target="#edit_year_goal" class="btn btn-primary">
              <span>
                <i class="fa fa-lg fa-edit"></i>
              </span>
              Edit
            </button>
            <button data-bs-toggle="modal" data-bs-target="#delete_year_goal" class="btn btn-danger">
              <span>
                <i class="fa fa-lg fa-trash"></i>
              </span>
              Delete
            </button>
          </td>
        </tr>
        </tbody>

      </table>
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
              <button data-bs-dismiss="modal"  type="submit" class="btn btn-secondary">Add Goal</button>
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
                <button  data-bs-dismiss="modal"  type="submit" class="btn btn-secondary">Add Goal</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
<!--         End of    Yearly modal here-->
</template>