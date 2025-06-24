import { useState, useEffect } from "react";
import CursoService from "../../services/curso.service";

function CursoForm({cursoEditando, aoSalvar}){
    const[cod_curso, setCod_curso] = useState('');
    const [nome, setNome] = useState('');

    useEffect(()=>{
        if(cursoEditando){
            setCod_curso(cursoEditando.cod_curso);
            setNome(cursoEditando.nome);

        }
    }, [cursoEditando]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (cursoEditando) {
            const cursoAtualizar = await CursoService.atualizar(cod_curso, { nome })
        } else {
            const data = await CursoService.criar({ cod_curso, nome })
            console.log(data);
        }
        setNome('');
        setCod_curso('');
        aoSalvar();
    };
    const codCursoPattern = "^[A-Z][0-9]{3}$";

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
               type="text" 
               placeholder="Código do Curso"
               value={cod_curso}
               pattern={codCursoPattern}
               onChange={(e) => setCod_curso(e.target.value)}
               minLength={4}
               maxLength={4}
               disabled={!!cursoEditando}   
               required 
            />
              <input 
               type="text" 
               placeholder="Nome do Curso"
               value={nome}
               onChange={(e) => setNome(e.target.value)}
               required
            />
            <button type="submit">{cursoEditando ? "Atualizar" : "Cadastrar" }</button>
        </form>
        </>
    )
}

export default CursoForm;