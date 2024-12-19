import { ListOftask } from "../index.js";

export const getAllTask = () => {
  return ListOftask;
};

export const createTask = (taskBody) => {
  ListOftask.push(taskBody);
  return ListOftask;
};

export const updateTask = (taskBody, id) => {
  const findTask = ListOftask.findIndex((task) => task.id === Number(id))
  ListOftask[findTask] = taskBody;
  return ListOftask[findTask];
};

export const deleteTask = (id) => {
  const findTask = ListOftask.findIndex((task) => task.id === Number(id))
  ListOftask.splice(findTask, 1);
  
  return null;
};
