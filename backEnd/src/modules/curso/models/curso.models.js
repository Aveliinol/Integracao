const { DataTypes } = require('sequelize');
const sequelize = require("../../../config/configDB");

const CursoModel = sequelize.define('Curso', {

    cod_curso: {
        type: DataTypes.STRING(4),
        primaryKey: true,
        allowNull: false,
        validate: {
            is: {
                args: /^[A-Z][0-9]{3}$/,
                msg: "Por favor, insira um código válido com 4 caracteres: o primeiro deve ser uma letra maiúscula seguida por três números"
            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
    {
        tableName: 'Curso',
        createAt: 'criado_em',
        updateAt: 'atualizado_em'
    }
)

module.exports = CursoModel