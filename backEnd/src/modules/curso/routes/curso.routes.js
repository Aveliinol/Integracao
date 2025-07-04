const express = require('express');
const CursoController = require('../controller/curso.controller');
const router = express.Router();

router.get('/', CursoController.listar);
router.post('/', CursoController.criar);
router.put('/:cod_curso', CursoController.atualizar);
router.delete('/:cod_curso', CursoController.deletar);

module.exports = router;