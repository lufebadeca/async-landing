const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCctuzSLKa7Vnu0md3SEiRWw&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd044a98895msh2caee4c752e1776p1e622ajsnacb6916b3a58',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

//trying to retrieve filtered data, videos only 
async function fetchData(urlAPI){
	const response = await fetch(urlAPI, options);
	const data = await response.json();
	//var mappedData = data.items.map(function(artic){
		//return data.items.id.videoId;
		//returns a new array with the desired property for all elements
	return data;
}

//funcion autollamable
(async () => {
	try{
		const videos = await fetchData(url);
		
		//var videosAsArray = Object.entries(allVideos);
		//const filtered = videosAsArray.filter( (key, value)=>{
			//return videosAsArray[key].id.videoId =! undefined; });
		//const videos = Object.fromEntries(filtered);

		let view = `
		${videos.items.map(video => `
		<div class="group relative">
			<a href="https://www.youtube.com/watch?v=${video.id.videoId}" class="text-sm text-gray-700">
			<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
					${video.snippet.title}
				</h3>
			</div>
			<p>https://www.youtube.com/watch?v=${video.id.videoId}</p></p></a>
		</div>
		`).slice(0,4).join('')}
		`;
		//console.log(videos.items[0].id);
		content.innerHTML = view;
	} catch (error){
		console.log(error);
	}
} )();