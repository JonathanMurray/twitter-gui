function render_result(){
	console.log("render_res");
	var hashtag = $("#hashtag-input").val();
	jQuery.ajax({
		url: "https://twitter-rest.herokuapp.com/tweets/" + hashtag,
		context: document.body
	}).done(function(data) {
		jQuery("#result-section").html(data);
		console.log(data);
	});
}

console.log("done reading script.js");