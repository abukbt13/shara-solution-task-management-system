<script setup>
import {onMounted, ref} from "vue";
const active = ref(true)

import {documentData} from "@/composable/documentData";
const {saveLocalDocument,google_name,google_link,google_description,saveGoogleDocument,filename,onFileChange,doc_name,doc_description}=documentData()
import {taskData} from "@/composable/taskData";
const {
  todo,todo_id,clearMessage,message,tasks,error,showSuccess,markComplete,submitTodo,task_type,title,getuserTasks,get_Completed_UserTasks,deleteTask,edit_Todo
}=taskData()
import {goalsData} from "@/composable/goalsData";
const {year_gooals,saveWeeklyGoal,YearlyGoal,weeklygoal,Yearly_goal,randomWeekGoals,getRandomyearGoals,getRandomWeekGoals}=goalsData()

import {reviewsData} from "@/composable/reviewsData";
const {viewReview,clearReview,submitReview, reviewerror,reviews, description, truncatedDescription, getReviews} =reviewsData()


import {youtube} from "@/composable/youtube"
const {getYoutube,videoId,numbers,youtubes, youtube_link,
  vid_name,vid_description,vid_error,
  saveYoutubeDetails} =youtube()


</script>

<template>

  <section class="section dashboard">
    <!--             Add Google docs modal here-->
    <div class="modal fade" id="google_docs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <form @submit.prevent="saveGoogleDocument">
              <p class="border-bottom">Upload google Document </p>

              <label class="text-uppercase" for="">Document Name</label>
              <input type="text" v-model="google_name" class="form-control">
              <label class="text-uppercase" for="">Document Link</label>
              <input type="text" v-model="google_link" class="form-control" placeholder="Type your goal here .....">
              <label class="text-uppercase" for="">Document Description</label>
              <input type="text" v-model="google_description" class="form-control" placeholder="Type your goal here .....">
              <span class="text-danger" v-if="error">{{ error }}</span>
              <div class="mt-1 float-end">
                <button  type="submit"  class="btn btn-secondary">Save link</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--         End of   Google docs Video-->
    <!--             Add Local docs modal here-->
    <div class="modal fade" id="local_docs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body">
            <form @submit.prevent="saveLocalDocument">
              <p class="border-bottom">Upload local Document</p>
              <label class="text-uppercase" for="">Document Name</label>
              <input type="text" v-model="doc_name" class="form-control">
              <label class="text-uppercase"  for="">Description </label>
              <textarea v-model="doc_description" class="form-control" cols="10" rows="5"></textarea>
              <label class="text-uppercase"  for="">Upload file </label>
              <input type="file" class="form-control"  @change="onFileChange"   placeholder="Enter The Company">              <div class="mt-1 float-end">

                <button    type="submit"  class="btn btn-secondary">Save link</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--         End of   Local docs Video-->
    <!--  modal for Task adding   -->
    <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="mx-2 my-2 d-flex justify-content-between">
            <h3 v-if="title" class="text-center">
              Edit Todo
            </h3>
            <h3 v-else class="text-center">
              Create To Dohhhhh
            </h3>
            <button type="button" class="btn-close btn-lg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <label class="ms-3 text-bg">To do </label>
          <div class="modal-body">
            <textarea name="todo" v-model="todo" id="" cols="20" rows="3" class="form-control" placeholder="Type your  to do here ....."></textarea>
            <span class="text-danger" v-if="error">{{ error }}</span>
            <br>


            <div class="float-end">

              <button  v-if="todo"  type="button" @click="submitTodo(todo_id)" data-bs-dismiss="modal" class="btn btn-secondary">
                <span class="" v-if="title">Update</span>
                <span class="" v-else >Save Todo</span>
              </button>
              <button v-else  type="button" @click="submitTodo(todo_id)" class="btn btn-secondary" >
                <span class="" v-if="title">Update</span>
                <span class="" v-else >Save Todo</span>
              </button>

             </div>
          </div>
        </div>
      </div>
    </div>
    <!--  modal for Task adding   -->
    <div class="row">

      <!-- Left side columns -->
      <div class="col-lg-8" >

        <div class="row">
          <div class="col-12">
            <div v-show="showSuccess" class="">
              <div  class="d-flex bg-primary justify-content-between align-items-center">
                <span class="text-uppercase">{{ message }}</span>
                <button @click="clearMessage" class="btn bg-primary p-2 m-1 border-0 btn-success"><i class="fas fa-close fa-lg"></i></button>
              </div>
            </div>

            <p style="position: sticky;" class="pb-0 fw-bold text-lg-center border-bottom-1 border-black">Tasks At Hand <span>| Today</span></p>
            <div style="overflow: scroll; min-height: 20rem;max-height: 21rem" class="card-body border-top-4">
                  <button class="btn btn-primary">  <span @click="clearTask"  data-bs-toggle="modal" data-bs-target="#add">
                     Add task
                   </span>
                  </button>
                <table class="table  datatable">

                  <tr>
                    <th class="border-1">#</th>
                    <th class="border-1">Tasks</th>
                    <th class="border-1">Task_Type</th>
                    <th class="border-1" colspan="3">Action</th>
                </tr>
                  <tbody v-show="active" style="display:none;">
                  <tr v-for="(task, index) in tasks" :key="task">
                    <td  class="border-1">{{index + 1}}</td>
                    <td  class="border-1">{{task.todo}}</td>
                    <td  class="border-1">{{task.task_type}}</td>

                    <td  class="border-1">
                      <i @click="edit_Todo(task)" data-bs-toggle="modal" data-bs-target="#add" class="fa fa-pencil" aria-hidden="true" style="font-size: 25px; color: blue;" title="Edit to do"></i>
                    </td>
                    <td  class="border-1">
                      <i class="fa fa-trash" data-bs-toggle="modal" data-bs-target="#delete" aria-hidden="true" style="font-size: 25px; color: blue;" title="Delete"></i>
                    </td>
                    <td>
                      <i class="fa fa-check" @click="markComplete(task.id)" aria-hidden="true" style="font-size: 25px; color: blue;" title="Mark as completed"></i>
                    </td>
                    <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">

                          <p style="font-size: 22px;" class="text-danger text-lg-start mt-5 ms-3">Are you sure you want to delete the Record ?</p>

                          <div class="">
                            <button @click="deleteTask(task.id)" data-bs-dismiss="modal" class="btn btn-danger m-2 float-end">Delete</button>

                            <button data-bs-dismiss="modal" class="btn btn-primary m-2 float-end">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                  </tbody>
                </table>

              </div>



          </div>
        <div class="">
          <p class="text-center border-bottom border-primary text-primary text-uppercase">My goals that Keep me going</p>
          <div class="row">

            <div  class="col">
                <div class="d-flex justify-content-between">
                  <p class="p-2">Weekly Goals</p>
                  <button data-bs-toggle="modal" data-bs-target="#weekly_goals" class="float-end" style="color: white;  background: blue;border-radius: 7px; height: 2rem; border: 1px solid">add goal</button>
                </div>
              <p>
                {{randomWeekGoals.goal}}
              </p>
<!--                  Modal for adding weekly goals  -->
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

<!--                        <button v-else  type="submit" @click="submitTodo(todo_id)" class="btn btn-secondary" data-bs-dismiss="modal">Add Goal</button>-->
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <!--                End  Modal for adding weekly goals  -->

            </div>
            <div  class="col">
                <div class="d-flex justify-content-between">
                  <p class="p-2">Yearly Goals</p>
                  <button data-bs-toggle="modal" data-bs-target="#yearly_goals" class="float-end" style="color: white;  background: blue;border-radius: 7px; height: 2rem; border: 1px solid">add goal</button>
                </div>
              <p>
                {{year_gooals.goal}}
              </p>
              <!--             Yearly modal here-->
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

            </div>
          </div>
          <div class="row border-top">
            To customize, View and edit your goals click here <br>
            <a href="#">Settings</a>
          </div>
        </div>
        </div>
      </div>
      <!-- End Left side columns/ colum one -->

      <!-- Right side columns -->
      <div class="col-lg-4">

        <!-- Recent Activity -->
          <p class="card-title">My reviewsData <span>| Today</span></p>

          <div style="min-height: 16rem;max-height: 19rem; overflow: scroll" class="card-body">
            <p @click="clearReview" style="background: #D980FA;" class="border sticky-top shadow" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <span><i class="fa fa-plus" aria-hidden="true"></i> </span>Add Review of your day</p>
            <div class="activity">
              <div  class="activity-item d-flex" v-for="review in reviews" :key="review">
                <div  class="d-flex">
                  <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                  <div class="activity-content" @click="viewReview(review)" data-bs-target="#view" data-bs-toggle="modal">
                    {{ truncatedDescription(review.description) }} <br>
                    <span class="spanview_review" style="border-bottom: 1px black solid;">click to view</span>
                  </div>
                </div>

              </div>

               Button trigger modal


              <!-- Modal -->
              <div class="modal fade" id="view" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">

                    <div class="modal-body">
                      <p class="d-flex justify-content-between">My Review         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></p>
                      {{description}}
                    </div>

                  </div>
                </div>
              </div>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header border-0">
                      <h5 class="modal-title" id="staticBackdropLabel">Review Your Day</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="submitReview">
                      <label for="" class="ms-3">Description</label>
                      <div class="modal-body">
                        <textarea v-model="description" id="" cols="15" class="form-control" rows="5"></textarea>
                      </div>
                      <span style="font-size: 20px;" class="ps-2 text-danger text-uppercase fw-bold">{{reviewerror}}</span>

                      <div class="modal-footer border-0">
                       <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" v-if="description">Create review w</button>
                       <button type="submit" class="btn btn-outline-primary"  v-else >Review</button>


                      </div>
                    </form>

                  </div>
                </div>
              </div>
              <!-- End activity item-->

            </div>

          </div>
        <!-- End Recent Activity -->
          <p>My favorite/learning Youtube videos <span><i data-bs-toggle="modal" data-bs-target="#youtube_video" class="fa fa-lg fa-plus"></i></span></p>


           <router-link v-for="youtube in youtubes" :key="youtube" :to="`/youtube/${youtube.link}`" class="btn btn-primary m-1">{{ youtube.name}}</router-link>


        <!--             Add youtube Video modal here-->
        <div class="modal fade" id="youtube_video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-body">

                <form @submit.prevent="saveYoutubeDetails">

                  <p class="text-center fst-italic fw-bolder">Upload Youtube details Here</p>
                  <label class="text-uppercase mt-2" for="">Name </label>
                  <input type="text" class="form-control" v-model="vid_name" placeholder="Name of the viedeo">
                  <label class="text-uppercase mt-2" for="">youtube link</label>
                  <input v-model="youtube_link"   class="form-control" placeholder="Enter link here .....">
                  <label class="text-uppercase mt-2" for="">Description</label>
                  <textarea rows="5" cols="10"  v-model="vid_description"   class="form-control" placeholder="Type description here"></textarea>
                  <span class="error mt-2 text-uppercase" v-if="error">{{ vid_error }}</span>
                    <p>{{videoId}}</p>
                  <div class="mt-2 float-end me-3">

                    <button  type="submit"  class="btn btn-secondary">Save video link</button>

<!--                    <button v-else  type="submit"  class="btn btn-secondary" data-bs-dismiss="modal">Save Video link</button>-->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--         End of   Add youtube Video-->
      </div>
      <!-- End Right side columns -->

    </div>
  </section>
</template>

<style scoped>

</style>