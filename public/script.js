function render_result(){
	console.log("render_res");
	var hashtag = $("#hashtag-input").val();
	jQuery.ajax({
		url: "https://twitter-rest.herokuapp.com/tweets/" + hashtag,
		context: document.body,
	}).done(function(data) {
		var tweets = data["tweets"];
		$("#result-section").html("");
		$.each(tweets, function(index, tweet){
			var user = tweet["user"];
			var message = tweet["message"];
			var html = (index+1) + ": " + tweet.user + " says '" + tweet.message + "'";
			$("#result-section").append("<div>" + html + "</div>");
		});
		console.log(data);
	});
}

console.log("done reading script.js");