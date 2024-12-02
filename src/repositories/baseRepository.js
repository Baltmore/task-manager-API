// GET
const findAll = async (bd) => {
  // findmany without parameters
  return await bd.findMany();
};

// GET by ID
const findById = async (bd, filter) => {
  // findmany with parameters
  const [key, value] = Object.entries(filter)[0];

  // ID validation
  if (!filter[key] || filter[key] === '') {
    throw new Error(`didn't send the ${key}`);
  }

  const result = { [key]: parseInt(value) };

  // request to the database
  return await bd.findMany({
    where: result,
    orderBy: { [key]: 'asc' },
  });
};

// POST
const create = async (bd, body) => {
  // create a new object into the database
  return await bd.create({
    data: body,
  });
};

// PUT
const update = async (bd, filter, body) => {
  // Get the key value to get the object id
  const [key, value] = Object.entries(filter)[0];

  // ID validation
  if (!filter[key] || filter[key] === '') {
    throw new Error(`didn't send the ${key}`);
  }

  const result = { [key]: parseInt(value) };

  // request to the database
  return await bd.update({
    where: result,
    data: body,
  });
};

// DELETE
const eliminate = async (bd, filter) => {
  // Get the key value to get the object id
  const [key, value] = Object.entries(filter)[0];

  // ID validation
  if (!filter[key] || filter[key] === '') {
    throw new Error(`didn't send the ${key}`);
  }

  const result = { [key]: parseInt(value) };

  // request to the database
  return await bd.delete({
    where: result,
  });
};

export default {
  findAll,
  findById,
  create,
  update,
  eliminate,
};
