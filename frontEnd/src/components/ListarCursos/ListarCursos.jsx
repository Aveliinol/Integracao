import { useEffect, useState } from "react";
import CursoService from '../../services/curso.service'

function ListarCursos({aoEditar}) {
    const [cursos, setCursos] = useState([]);

    const carregar = async () => {
        const lista = await CursoService.listar();
        console.log(lista);
        setCursos(Array.isArray(lista) ? lista : []);
    }

    const deletar = async (cod_curso, nome) => {
        const confirm = window.confirm(`Deseja mesmo deletar o curso ${nome} ?`);
        if (confirm) {
            const res = await CursoService.deletar(cod_curso);
            console.log(res)
            if (res) {
                alert('Curso deletado com sucesso!');
                carregar();
            } else {
                alert('Erro ao deletar!');
            }
        }
    }

    useEffect(() => {
        carregar()
    }, []);

    return (
        <>
            <h1>Listagem de cursos</h1>
            {
                cursos.length === 0 ? (
                    <p>
                        Nenhum curso cadastrado no sistema.
                    </p>
                ) :
                    (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>nome</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cursos.map((c) => (
                                        <tr key={c.cod_curso}>
                                            <td>{c.cod_curso}</td>
                                            <td>{c.nome}</td>
                                            <td>
                                                <button onClick={()=> aoEditar(c)}>Editar</button>
                                                <button onClick={() => deletar(c.cod_curso, c.nome)}>Excluir</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
            }
        </>
    )
}

export default ListarCursos;
