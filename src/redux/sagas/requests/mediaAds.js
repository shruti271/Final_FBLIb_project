import axios from 'axios';


export function requestGetMedia() {
	return axios.request({
		method: 'get',
		url: 'http://127.0.0.1:8000/api/allads/',		
	});
}