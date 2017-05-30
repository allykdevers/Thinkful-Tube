$(document).ready(function () {


    function showResults (data){
        var items= data.items;
        for (var i=0; i < items.length; i++ ){
          $('.results').append("<div>"+ items[i].snippet.title+"</div>")
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
    var searchTerm = $('#search-text').val();
    alert(searchTerm);
    getVideos(searchTerm);
    
    event.preventDefault();
});
});