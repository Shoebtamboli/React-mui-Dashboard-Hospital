// kanbanStore.ts
import produce from "immer";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { INITIAL_TASKS } from "../mockData";

const store = (set: any) => ({
  tasks: INITIAL_TASKS,
  draggedTask: null,
  tasksInOngoing: 0,
  addTask: (title: any, state: any) =>
    set(
      produce((store: any) => {
        store.tasks.push({ id: uuidv4(), title, state });
      }),
      false,
      "addTask"
    ),
  deleteTask: (id: any) =>
    set((store: any) => ({
      tasks: store.tasks.filter((task: any) => task.id !== id)
    })),
  setDraggedTask: (id: any) => set({ draggedTask: id }),
  moveTask: (id: any, state: any) =>
    set((store: any) => ({
      tasks: store.tasks.map((task: any) =>
        task.id === id ? { ...task, state } : task
      )
    }))
});

const log = (config: any) => (set: any, get: any, api: any) =>
  config(
    (...args: any) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  subscribeWithSelector(log(persist(devtools(store), { name: "store" })))
);

useStore.subscribe(
  (store) => store.tasks,
  (newTasks, prevTasks) => {
    useStore.setState({
      tasksInOngoing: newTasks.filter((task: any) => task.state === "ONGOING")
        .length
    });
  }
);
