function query_and_render(){
	var hashtag = $("#hashtag-input").val();
	jQuery.ajax({
		url: "https://twitter-rest.herokuapp.com/tweets/" + hashtag,
		context: document.body,
	}).done(function(data) {
		var tweets = data["tweets"];
		render(tweets);
	});
}

function render(tweets){
	$("#result-section").html("");
	$.each(tweets, function(index, tweet){
		var user = tweet["user"];
		var message = tweet["message"];
		var entry = "<span class='author'>" + tweet.user + "</span> <span class='message'>" + tweet.message + "</span>";
		$("#result-section").append("<div class='entry'>" + entry + "</div>");
	});
}