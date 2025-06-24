import api from './api';

class AlunoService {

    static async criar(dados) {
        try {
            const res = await api.post('/alunos', dados);
            return res.data;
        } catch (error) {
            console.log('Error ao criar aluno', error.message);
        }
    }

    static async atualizar(matricula, dados) {
        try {
            const res = await api.put(`/alunos/${matricula}`, dados);
            return res.data;
        } catch (error) {
            console.log('Error ao atualizar aluno', error.message);
        }
    }

    static async listar() {
        try {
            const res = await api.get('/alunos');
            return res.data;
        } catch (error) {
            console.log('Error ao listar alunos', error.message);
            return [];
        }
    }

    static async deletar(matricula) {
        try {
            const res = await api.delete(`/alunos/${matricula}`);
            return res.data;
        } catch (error) {
            console.log('Error ao deletar aluno', error.message);
        }
    }
}

export default AlunoService;