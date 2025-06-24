import api from './api';

class CursoService {

    static async criar(dados){
        try {
            const res = await api.post('/cursos', dados);
            return res.data;
        } catch (error) {
            console.log('Error ao criar curso', error.message);
        }
    }
    static async atualizar(cod_curso, dados){
        try {
            const res = await api.put(`/cursos/${cod_curso}`)
            return res.data
        } catch (error) {
            console.log('Error ao atualizar curso', error.message);
        }
    }
    static async listar(){
        try {
            const res = await api.get('/cursos');
            return res.data;
        } catch (error) {
            console.log('Error ao listar cursos', error.message);
            return [];
        }
    }
    static async deletar(cod_curso){
        try {
            const res = await api.delete(`/cursos/${cod_curso}`);
            return res.data;
        } catch (error) {
            console.log('Error ao deletar curso', error.message); 
        }
    }
}

export default CursoService;