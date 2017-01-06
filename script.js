$(document).ready(function() {
    var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

    function getYouTubeApi(searchTerm, callback) {
    var query = {
      part: 'snippet',
      key: 'AIzaSyBmZfE4yxQQQCFXws7eALM5nzMbp4uLiNU',
      q: searchTerm,
      maxResults: 3
    }
    $.getJSON(YOUTUBE_BASE_URL, query, callback);
  }

  function showYouTubeResults(data) {
    var youtubeResult='';
    
    if (data.items) {
      data.items.forEach(function(item) {
        youtubeResult += "<p><iframe height='300' width='370'" +
          "src='https://www.youtube.com/embed/" + item.id.videoId + "?controls=1'>" + "</iframe></p>"
      });
    }
    else {
      youtubeResult += '<p>No results!</p>';
    }

    $('#js-results').html(youtubeResult);
  }

  $('#js-search').submit(function() {
    event.preventDefault();
    var searchTerm = $('#js-search-input').val();         
    getYouTubeApi(searchTerm, showYouTubeResults); 
  });

});
