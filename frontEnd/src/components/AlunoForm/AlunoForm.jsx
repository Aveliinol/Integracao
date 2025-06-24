import { useState, useEffect } from "react";
import AlunoService from "../../services/aluno.service";

function AlunoForm(alunoEditando, aoSalvar){
    const[matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cod_curso, setCod_curso] = useState('');

    useEffect(()=>{
        if(alunoEditando){
            setMatricula(alunoEditando.matricula);
            setNome(alunoEditando.nome);
            setCod_curso(alunoEditando.cod_curso);
        }
    }, [alunoEditando]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (alunoEditando) {
            const alunoAtualizar = await AlunoService.atualizar(matricula, {nome, cod_curso})
        } else {
            const data = await AlunoService.criar({ matricula, nome, cod_curso })
            console.log(data);
        }
        setMatricula('');
        setNome('');
        setCod_curso('');
        aoSalvar();
    };
    const matriculaPattern = "^[A-Z][0-9]{5}$";
    const codCursoPattern = "^[A-Z][0-9]{3}$";

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input 
               type="text" 
               placeholder="Matricula do Aluno"
               value={matricula}
               pattern={matriculaPattern}
               onChange={(e) => setMatricula(e.target.value)}
               maxLength={6}
               minLength={6}
               disabled={!!alunoEditando}
               required
            />
        <input 
               type="text" 
               placeholder="Nome do Aluno"
               value={nome}
               onChange={(e) => setNome(e.target.value)}
               required
            />
            <input 
               type="text" 
               placeholder="Código do Curso"
               value={cod_curso}
               pattern={codCursoPattern}
               onChange={(e) => setCod_curso(e.target.value)}
               maxLength={4}
               required 
            />
            <button type="submit">{alunoEditando ? "Atualizar" : "Cadastrar" }</button>
        </form>
        </>
    )
}

export default AlunoForm;