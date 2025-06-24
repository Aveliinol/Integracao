import { useState } from "react";
import PageCurso from "./pages/CursoPage/Cursopage";
import PageAluno from "./pages/AlunoPage/AlunoPage";

function App(){
  return(
    <>
    <h1>Integração front com back</h1>
    <PageCurso/>
    <hr />
    <PageAluno/>
    </>
  )
}

export default App