<script setup>
import { useTaskStore } from "@/stores/TaskStore"
import TaskDetails from "@/components/TaskDetails.vue"

const taskStore = useTaskStore()
</script>

<template lang="pug">
header
  img(src="@/assets/pinia-logo.svg" alt="Pinia Logo")
  h1 Pinia Tasks
main
  //- tasks
  .task-list
    p all tasks
    TaskDetails(v-for="task in taskStore.tasks" :key="task.id" :task="task")

  .task-list
    p favorite tasks
    TaskDetails(v-for="task in taskStore.favorites()" :key="task.id" :task="task")

</template>

<style lang="sass" scoped>
/* header */
header
  display: flex
  place-content: center
  text-align: center
  background: #e7e7e7
  padding-block: 20px

header img
  max-width: 60px
  transform: rotate(-10deg)

header h1
  margin: 0
  font-size: 2em
  padding-top: 25px
  margin-left: 15px
  color: #777
  transform: rotate(2deg)
.task-list
  max-width: 640px
  margin: 20px auto
</style>