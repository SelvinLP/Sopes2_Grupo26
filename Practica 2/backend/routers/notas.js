const { Router } = require('express');
const { newstudent, newcourse, newasignacion, getestudiante, newactivity, newnota, getnota} = require('../controller/controller');
const router = Router();
module.exports = router;

//ESTUDIANTE NUEVO
router.post('/newstudent', newstudent);

//CURSO NUEVO
router.post('/newcourse', newcourse);

//ASIGNACION DE CURSO
router.post('/asigcurso', newasignacion);

//VISUALIZAR ESTUDIANTE POR CURSO
router.post('/getstudentcourse', getestudiante);

//REGISTRAR ACTIVIDAD
router.post('/newactivity', newactivity);

//INGRESO NOTA ACTIVIDAD
router.post('/newnota', newnota);

//VISUALUZAR NOTA DE ACTIVIDAD
router.post('/getnota', getnota);
