import { useEffect, useState } from "react";
import AlunoService from "../../services/aluno.service";

function ListarAlunos({aoEditar}) {
    const [alunos, setAlunos] = useState([]);

    const deletar = async (matricula, nome) => {
        const confirm = window.confirm(`Deseja mesmo deletar o aluno ${nome} ?`);
        if (confirm) {
            const res = await AlunoService.deletar(matricula);
            console.log(res)
            if (res) {
                alert('Aluno deletado com sucesso!');
                carregar();
            } else {
                alert('Erro ao deletar!');
            }
        }
    }

    const carregar = async () => {
        const lista = await AlunoService.listar();
        console.log(lista)
        setAlunos(Array.isArray(lista) ? lista : []);
    };

    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <h1>Listagem de Alunos</h1>

            {
                alunos.length === 0 ? (
                    <p>
                        Nenhum aluno cadastrado no sistema.
                    </p>
                ) : (
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Matrícula</th>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Nome do curso</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alunos.map((a) => (
                                    <tr key={a.matricula}>
                                        <td>{a.matricula}</td>
                                        <td>{a.nome}</td>
                                        <td>{a.cod_curso}</td>
                                        <td>{a.Curso.nome}</td>
                                        <td>
                                            <button onClick={() => aoEditar(a)}>Editar</button>
                                            <button onClick={() => deletar(a.matricula, a.nome)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </>
    );
}

export default ListarAlunos;