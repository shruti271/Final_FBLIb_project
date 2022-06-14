import axios from 'axios';


export function requestGetMedia() {
	return axios.request({
		method: 'get',
		url: 'http://44.204.84.86/api/allads/',		
	});
}