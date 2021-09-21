const db = require('../../data/db-config')

function getAll() {
  return db('plants')
}

async function add(plant) {
  const [plant_id] = await db('plants').insert(
    {
      nickname: plant.nickname,
      species: plant.species,
      h2o_frequency: plant.h2o_frequency,
      Image_url: plant.Image_url
    },
    'plant_id'
  );
  await db('plants')
    .insert({
      plant_id: plant_id,
    })
  return findById(plant_id);
}

function findById(plant_id) {
  return db('plants as p')
    .select('p.plant_id', 'p.nickname', 'p.species', 'p.h2o_frequency', 'p.Image_url')
    .where('p.plant_id', plant_id)
    .first()
}

module.exports = {
  getAll,
  add,
  findById,
}