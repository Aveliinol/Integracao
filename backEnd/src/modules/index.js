const Aluno = require('./aluno/models/aluno.models');
const Curso = require('./curso/models/curso.models');

Aluno.belongsTo(Curso,
    {
        foreignKey: 'cod_curso',
        targetKey: 'cod_curso'
    }
);
Curso.hasMany(Aluno,
    {
        foreignKey: 'cod_curso',
        sourceKey: 'cod_curso'
    }
);
module.exports = {
    Aluno, Curso
}