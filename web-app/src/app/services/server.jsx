const axios = require('axios');

const API_URI = 'http://3.129.67.68:3000';

/**
 * {
 *      total: numeric,
 *      consumida: numeric,
 *      porcentaje: numeric,
 * }
 */
export function memoryData(){
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
  return axios.get(`${API_URI}/tree`);    
}

/**
 * Función para eliminar un proceso
 * @param {*} pid del proceso al que se eliminara de la lista
 * @returns {} 
 */
export function killProcess(pid){
  return axios.post(`${API_URI}/killprocess`, {pid: pid});
}