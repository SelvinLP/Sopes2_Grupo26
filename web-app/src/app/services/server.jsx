const axios = require('axios');

const API_URI = 'http://:5000';

/**
 * {
 * 
 * }
 * @returns 
 */

export function memoryData(){
    return axios.get(`${API_URI}/memory`);
}

export function processData(){
    return axios.get(`${API_URI}/process`);
}

export function treeData(){
    return axios.get(`${API_URI}/tree`);
}