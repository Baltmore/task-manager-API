import asyncHandler from 'express-async-handler';
import { database } from '../../config/database.js';
import base from '../../repositories/baseRepository.js';
import { _getFilterFromQueryParams } from '../../common/utils/functions.js';

//GET ALL
export const getPriority = asyncHandler(async (req, res) => {
  // find all departments in the database
  const consult = await base.findAll(database.priorities);

  // return all departments
  return res.status(200).json(consult);
});

//GET BY ID
export const getPriorityById = asyncHandler(async (req, res) => {
  // get the query parameters from the request
  const query = req.query;

  // separate the values of the parameters by comma
  const filter = _getFilterFromQueryParams(query);

  // find the department by the id in the database
  const consult = await base.findOne(database.priorities, filter);

  // return the department by the id
  return res.status(200).json(consult);
});

//POST
export const createPriority = asyncHandler(async (req, res) => {
  // get the body from the request
  const body = req.body;

  // create a department in the database
  const created = await base.create(database.priorities, body);

  // return the department created
  return res.status(201).json(created);
});

//PUT
export const updatePriority = asyncHandler(async (req, res) => {
  // get the body from the request
  const query = req.query;

  // separate the values of the parameters by comma
  const filter = _getFilterFromQueryParams(query);

  // get the body from the request
  const body = req.body;

  // update the department by the id in the database
  const updated = await base.update(database.priorities, filter, body);

  // return the department updated
  return res.status(200).json(`Resource updated: ${updated}`);
});

//DELETE
export const deletePriority = asyncHandler(async (req, res) => {
  // get the query parameters from the request
  const query = req.query;

  // separate the values of the parameters by comma
  const filter = _getFilterFromQueryParams(query);

  // delete the department by the id in the database
  const deleted = await base.remove(database.priorities, filter);

  // return the department deleted
  return res.status(200).json(`Resource deleted: ${deleted}`);
});