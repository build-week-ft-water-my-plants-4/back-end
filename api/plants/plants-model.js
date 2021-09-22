const db = require('../../data/db-config')

function getAll() {
  return db('plants')
}

// async function add(plant) {
//   const [plant_id] = await db('plants').insert(
//     {
//       nickname: plant.nickname,
//       species: plant.species,
//       h2o_frequency: plant.h2o_frequency,
//       image_url: plant.image_url,
//       user_id: plant.user_id
//     },
//     'plant_id'
//   );
//   await db('plants')
//     .insert({
//       plant_id: plant_id,
//     })
//   return findById(plant_id);
// }

const add = async ({nickname, species, h2o_frequency, image_url, user_id}) => {
  await db('plants').insert({
    nickname: nickname,
    species: species,
    h2o_frequency: h2o_frequency,
    image_url: image_url,
    user_id: user_id
  })
}

function findById(plant_id) {
  return db('plants as p')
    .select('p.plant_id', 'p.nickname', 'p.species', 'p.h2o_frequency', 'p.image_url')
    .where('p.plant_id', plant_id)
    .first()
}

module.exports = {
  getAll,
  add,
  findById,
}