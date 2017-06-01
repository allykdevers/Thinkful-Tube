$(document).ready(function () {


   function showResults (data) {
        var items= data.items;
        for(var i = 0; i < items.length; i++) {
            $('.results').append('<div> <a href="http://www.youtube.com/watch?v='+items[i].id.videoId+'"><img src="' + items[i].snippet.thumbnails.medium.url + '"></a> <p>'  + items[i].snippet.title + '</p></div');
        }


   }
  



   
    function getVideos(searchTerm){
        var params = {
            q:searchTerm,
            r:'json',
            part:'snippet',
            key:'AIzaSyDSM1tKpKblwzdPvTd44mNy3QM41uqfZT0',
        },
        url='https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url,params,function (data) {
        console.log (data);
		showResults(data);
	});

    }
$('#search-form').submit(function (event){
    alert('submitted');
    $('.results').html('');
    var searchTerm = $('#search-text').val();
    alert(searchTerm);
    getVideos(searchTerm);
    
    event.preventDefault();
});
});