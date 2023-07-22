import { create } from "zustand";
import { INITIAL_EVENTS } from "../mockData";

const useCalendar = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events: any) => set({ currentEvents: events })
}));

export default useCalendar;
