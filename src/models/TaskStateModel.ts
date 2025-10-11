import type { TaskModel } from './taskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shotBreakTime: number;
    longBreakTime: number;
  };
};
