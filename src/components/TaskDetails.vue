<script setup>
defineProps({
  task: Object,
})
</script>

<template lang="pug">
.task
  h3 {{ task.title }}
  .task__icons
    i.material-icons delete
    i.material-icons favorite
</template>

<style lang="sass" scoped>
.task
  display: flex
  place-items: center
  padding: 6px 20px
  background: #fff
  margin-top: 20px
  border-radius: 4px
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05)

  h3, &__icons
    display: inline-block

  &__icons
    text-align: left
    margin-left: auto

    i
      font-size: 1.4em
      margin-left: 6px
      cursor: pointer
      color: #bbb
      
      &:hover
        color: lightcoral
</style>
