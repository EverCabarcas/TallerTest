import { taskBodyValidations } from "../utils/tallerUtils.js";
import {createTask, deleteTask, getAllTask, updateTask } from '../services/tallerServices.js'

export const createNewTask = async (req, res, next) => {
  try {
    // validate body
    taskBodyValidations(req.body);

    // create task
    const listOfTask = createTask(req.body);

    res.send({ task: listOfTask });
  } catch (error) {
    next(error);
  }
};

export const getListOfTask = async (req, res, next) => {
  try {
    // get list of task
    const listOfTask = getAllTask();

    res.send({ task: listOfTask });
  } catch (error) {
    next(error);
  }
};

export const updateOneTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("id for the task is required!!!");
    }

    // validate body
    taskBodyValidations(req.body);

    // get list of task
    const taskUpdated = updateTask(req.body, id);

    res.send({ task: taskUpdated });
  } catch (error) {
    next(error);
  }
};

export const deleteOneTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("id for the task is required!!!");
    }

    deleteTask(id);

    res.send({});
  } catch (error) {
    next(error);
  }
};
