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
			$("#result-section").append("<div>" + (index+1) + ": " + tweet.message + "</div>");
		});
		console.log(data);
	});
}

console.log("done reading script.js");