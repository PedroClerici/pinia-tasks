import { defineStore } from "pinia"

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = $ref([
    { id: 1, title: "Buy some milk.", isFav: false },
    { id: 2, title: "Play Gloomhaven", isFav: true },
  ])

  // Getters
  function favorites() {
    return tasks.filter((task) => task.isFav)
  }

  return { tasks, favorites }
})
