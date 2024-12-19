import logger from "../logger/logger.js";

export const taskBodyValidations = ({ id, title, completed }) => {
  if (!id) {
    logger.error("task ID is required");
    const error = new Error("task ID is required");
    error.status = 400;
    throw error;
  }

  if (!title) {
    logger.error("task title is required");
    const error = new Error("task title is required");
    error.status = 400;
    throw error;
  }

  if (typeof completed != "boolean") {
    logger.error("task completed is required");
    const error = new Error("task completed is required");
    error.status = 400;
    throw error;
  }
};
