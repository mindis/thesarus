
import Sequelize from 'sequelize'

const modelName = 'Link'

const fields = {
    node_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    entity_id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
}

const options = {
    tableName: 'links',
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
}

const init = (conn) => {
    const Model = conn.define(modelName, fields, options)
    return Model.sync()
}

export default { name: modelName, init }
