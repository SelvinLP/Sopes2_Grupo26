const aws_keys = require('../credentials/credintials');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB(aws_keys.dynamodb);

//ESTUDIANTE NUEVO
const newstudent = async(req, res) =>{
    var params = {
        TableName: 'estudiantes',
        Item: {
          'carnet': {N: req.body.carnet},
          'cui':    {N: req.body.cui},
          'nombre':   {S: req.body.nombre},
          'correo':   {S: req.body.correo},
          'fechanac':   {S: req.body.fechanac}
        }
      };
      
      ddb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error"
            })
        } else {
            let paramsres = {
                TableName: 'estudiantes',
                Limit: 50 
            };
            
            ddb.scan(paramsres, function(err, data){
                if(err){
                    console.log("Error", err);
                    res.send({
                        status: "error"
                    })
                } else{
                    res.send({
                        status: "success",
                        data: data.Items
                    })
                }
            });
        }
      });

   
}

//CURSO NUEVO
const newcourse = async(req, res) =>{
    var params = {
        TableName: 'cursos',
        Item: {
          'codigo': {N: req.body.codigo},
          'nombre':   {S: req.body.nombre},
          'credn':   {N: req.body.credn},
          'credo':   {N: req.body.credo}
        }
      };
      
      ddb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error"
            })
        } else {
            let paramsres = {
                TableName: 'cursos',
                Limit: 50 
            };
            
            ddb.scan(paramsres, function(err, data){
                if(err){
                    console.log("Error", err);
                    res.send({
                        status: "error"
                    })
                } else{
                    res.send({
                        status: "success",
                        data: data.Items
                    })
                }
            });
        }
      });
}

//ASIGNACION DE CURSO
const newasignacion = async(req, res) =>{
    var params = {
        TableName: 'asignacion',
        Item: {
          'estudiante': {N: req.body.estudiante},
          'curso':   {N: req.body.curso},
          'periodo':   {S: req.body.periodo}
        }
      };
      
      ddb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error"
            })
        } else {
            let paramsres = {
                TableName: 'asignacion',
                Limit: 50 
            };
            
            ddb.scan(paramsres, function(err, data){
                if(err){
                    console.log("Error", err);
                    res.send({
                        status: "error"
                    })
                } else{
                    res.send({
                        status: "success",
                        data: data.Items
                    })
                }
            });
        }
      });
}

//VISUALIZAR ESTUDIANTE POR CURSO
const getestudiante = async(req, res) =>{

    var params = {
        TableName: 'asignacion',
        ExpressionAttributeValues: {
            ':curso': {N: req.body.curso}
        },
        KeyConditionExpression: 'curso = :curso',
        ProjectionExpression: 'curso, estudiante, periodo',
    };
    
    ddb.query(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error",
                data: []
            })
        } else {
            res.send({
                status: "success",
                data: [data]
            })
        }
    });
}

//REGISTRAR ACTIVIDAD
const newactivity = async(req, res) =>{
    var params = {
        TableName: 'actividades',
        Item: {
          'tipo': {S: req.body.tipo},
          'fechai':   {S: req.body.fechai},
          'fechaf':   {S: req.body.fechaf}
        }
      };
      
      ddb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error"
            })
        } else {
            let paramsres = {
                TableName: 'actividades',
                Limit: 50 
            };
            
            ddb.scan(paramsres, function(err, data){
                if(err){
                    console.log("Error", err);
                    res.send({
                        status: "error"
                    })
                } else{
                    res.send({
                        status: "success",
                        data: data.Items
                    })
                }
            });
        }
      });
}

//INGRESO NOTA ACTIVIDAD
const newnota = async(req, res) =>{
    var params = {
        TableName: 'notas',
        Item: {
          'nota': {N: req.body.nota},
          'estudiante':   {N: req.body.estudiante},
          'actividad':   {S: req.body.actividad}
        }
      };
      
      ddb.putItem(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error"
            })
        } else {
            let paramsres = {
                TableName: 'notas',
                Limit: 50 
            };
            
            ddb.scan(paramsres, function(err, data){
                if(err){
                    console.log("Error", err);
                    res.send({
                        status: "error"
                    })
                } else{
                    res.send({
                        status: "success",
                        data: data.Items
                    })
                }
            });
        }
      });
}

//VISUALUZAR NOTA DE ACTIVIDAD
const getnota = async(req, res) =>{

    var params = {
        TableName: 'notas',
        ExpressionAttributeValues: {
            ':actividad': {S: req.body.actividad}
        },
        KeyConditionExpression: 'actividad = :actividad',
        ProjectionExpression: 'nota, estudiante, actividad',
    };
    
    ddb.query(params, function(err, data) {
        if (err) {
            console.log(err);
            res.send({
                status: "error",
                data: []
            })
        } else {
            res.send({
                status: "success",
                data: [data]
            })
        }
    });
}

module.exports = {
    newstudent,
    newcourse,
    newasignacion,
    getestudiante,
    newactivity,
    newnota,
    getnota
}