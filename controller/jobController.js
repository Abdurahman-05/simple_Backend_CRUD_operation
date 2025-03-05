import mongoose from "mongoose";
import Job from "../models/jobModel.js";

export const getJob = async (req, res) => {
  try {
    const result = await Job.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
export const creatJob = async (req, res) => {
  const { title, description, location, salary } = req.body;
  if (!title || !description || !location || !salary)
    return res.sendStatus(400);
  try {
    const newJob = new Job({ title, description, location, salary });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.log(error);
  }
};

export const updeatJob = async (req, res) => {
  if (!req.body.id) return res.sendStatus(400);
  const { title, description, location, salary } = req.body;
  if (!title || !description || !location || !salary)
    return res.sendStatus(400);
  try {
    const result = await Job.findOne({ _id: req.body.id });
    if (!result) return res.sendStatus(404);
    result.title = title;
    result.description = description;
    result.location = location;
    result.salary = salary;
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  const id = req.params.id;

  console.log("recieved ID  ", id);
  if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(404);
  try {
    const result = await Job.findOne({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const removeJob = async (req, res) => {
  const id = req.body.id;

  if (!id) return res.sendStatus(404);
  try {
    const rmJob = await Job.findOne({ _id: id });
    if (!rmJob) return res.status(404).json({ message: "Job not found" });
    await rmJob.deleteOne({ _id: id });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};




