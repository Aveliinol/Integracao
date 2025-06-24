const { DataTypes } = require('sequelize');
const sequelize = require("../../../config/configDB");

const AlunoModel = sequelize.define('Aluno', {

    matricula: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false,
        validate: {
            is: {
                args: /^[A-Z][0-9]{5}$/,
                msg: "Por favor, insira um código válido com 6 caracteres: o primeiro deve ser uma letra maiúscula seguida por cinco números"
            }
        }
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cod_curso: {
        type: DataTypes.STRING(4),
        allowNull: false,
        references: {
            model: 'Curso',
            key: 'cod_curso'
        }
    }
},
    {
        tableName: 'Aluno',
        createAt: 'criado_em',
        updateAt: 'atualizado_em'
    }
)

module.exports = AlunoModel