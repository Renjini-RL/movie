const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0b4d59224bmshaea00ba0b0a5f1bp1ea613jsn58941eac78ed',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};




function search(){

	moviename=movieName.value
	
fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${moviename}%20`, options)
	.then(response => response.json())
	.then(data  => {
		const list =data.d;
		console.log(data)
	
		list.map((item) => {
			const name = item.l;
			const poster = item.i.imageUrl;
			const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
			

			document.querySelector(".movies").innerHTML+=movie;
		})

	})

	.catch(err => {
		 console.error(err)
	});
}