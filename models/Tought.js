const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User') //chamado User

//User

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

Tought.belongsTo(User) //um pensamento pertence a um usuário
User.hasMany(Tought) //um usuário pode ter vários pensamentos

module.exports = Tought