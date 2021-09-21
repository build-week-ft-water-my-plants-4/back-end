
exports.up = async (knex) => {
    await knex.schema
        .createTable('users', tbl => {
            tbl.increments('user_id')
            tbl.string('username')
                .unique()
                .notNullable()
            tbl.integer('phone_number')
                .notNullable()
            tbl.string('password')
                .notNullable()
        })
        .createTable('plants', tbl => {
            tbl.increments('plant_id')
            tbl.string('nickname')
                .notNullable()
            tbl.string('species')
                .notNullable()
            tbl.string('h2o_frequency')
                .notNullable()
            tbl.text('image_url')
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('user_id').inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = async (knex) => {
    await knex.schema
        .dropTableIfExists('plants')
        .dropTableIfExists('users')
};
