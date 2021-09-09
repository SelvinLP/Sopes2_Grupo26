const axios = require('axios');

const API_URI = 'http://:5000';

/**
 * {
 *      total: numeric,
 *      consumida: numeric,
 *      porcentaje: numeric,
 * }
 */
export function memoryData(){
    let max = 100;
    let min = 10;
    return {
        total: Math.floor(Math.random() * (max - min) + min),
        consumida: Math.floor(Math.random() * (max - min) + min),
        porcentaje: Math.floor(Math.random() * (max - min) + min),
    }
    //return data;
    return axios.get(`${API_URI}/memory`);
}

/**
 * {
 *      registered: numeric, //total de procesos registrados
 *      running: numeric, //total de procesos en ejecución
 *      sleeping: numeric, //total de procesos en ejecución
 *      stopped: numeric, //total de procesos en ejecución
 *      zombie: numeric, //total de procesos en ejecución
 *      data: [
 *          PID: numeric,
 *          name: string,
 *          estate: string,
 *          ram: numeric,
 *          taskCodesize: numeric,
 *          user: string 
 *      ]
 * }
 */
export function processData(){
    let max = 100;
    let min = 10;
    return {
        registered:Math.floor(Math.random() * (max - min) + min),
        running:Math.floor(Math.random() * (max - min) + min),
        sleeping:Math.floor(Math.random() * (max - min) + min),
        stopped:Math.floor(Math.random() * (max - min) + min),
        zombie:Math.floor(Math.random() * (max - min) + min),
        data: [
            {
                PID: Math.floor(Math.random() * (max - min) + min), 
                name: "string", 
                estate: "sleeping", 
                ram: Math.floor(Math.random() * (max - min) + min), 
                taskCodesize: Math.floor(Math.random() * (max - min) + min), 
                user: "string"
            },
            {
                PID: Math.floor(Math.random() * (max - min) + min), 
                name: "otro", 
                estate: "zombie", 
                ram: Math.floor(Math.random() * (max - min) + min), 
                taskCodesize: Math.floor(Math.random() * (max - min) + min), 
                user: "user1"
            },
        ]
    }
    return axios.get(`${API_URI}/process`);
}

/**
data = [
  {
    id: '2',
    name: '',
  },
  {
    id: '3',
    name: '',
    father: 2,
  }
    
]
 * 
 */
export function treeData(){
  return [
    { id: 56, father: 62, name:'ssh' },
    { id: 81, father: 80, name:'ssh'  },
    { id: 74, father: null, name:'master'  },
    { id: 76, father: 80, name:'ssh'  },
    { id: 63, father: 62, name:'ssh'  },
    { id: 80, father: 86, name:'ssh'  },
    { id: 87, father: 86, name:'ssh'  },
    { id: 62, father: 74, name:'ssh'  },
    { id: 86, father: 74, name:'ssh'  },
  ];
    return axios.get(`${API_URI}/tree`);
}

/**
 * Función para eliminar un proceso
 * @param {*} pid del proceso al que se eliminara de la lista
 * @returns {} 
 */
export function killProcess(pid){
  return alert(`Llamando a kill process ${pid}`)
    return axios.post(`${API_URI}/killprocess`, {pid: pid});
}