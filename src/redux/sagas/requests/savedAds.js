import axios from 'axios';


export function requestGetSavedAds() {
	return axios.request({
		method: 'get',
		url: 'http://localhost:8000/api/saveadmanager/',withCredentials:true //http://127.0.0.1:8000/api/saveadmanager/		
		// url: '//http://127.0.0.1:8000/api/saveadmanager/',withCredentials:true //http://127.0.0.1:8000/api/saveadmanager/		

	});
}

export function requestCreateSavedAds(SavedAds) {
	return axios.request({
		method: 'post',
		url: 'http://localhost:8000/api/saveadmanager/',withCredentials:true,
		data: SavedAds,
	});
}

export function requestDeleteSavedAds(id) {
	console.log(">>>>>>>>>>???????????????"+id);
	return axios.request({
		method: 'delete',
		url: `http://localhost:8000/api/saveadmanager/${Number(id)}/`,withCredentials:true,
	});
}