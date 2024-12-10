export const exerciseOptions = {
  method: 'GET',
  headers: {
		'X-RapidAPI-Key': 'ccc76f7075msh1d8385af9f680c3p1bf1abjsn01182e3d0d23',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
}

export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ccc76f7075msh1d8385af9f680c3p1bf1abjsn01182e3d0d23',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};