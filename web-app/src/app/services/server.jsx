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
 * data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
}


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