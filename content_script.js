// var script = 'document.body.style.backgroundColor="' + color + '";';
document.body.style.backgroundColor = "aliceblue";
var  rslt =  document.getElementsByClassName("b_algo")

var ali = []
for (i = 0; i < rslt.length; i ++){
	item = rslt[i].getElementsByTagName("h2")[0].getElementsByTagName("a")[0].href
	ali.push(item)
}
chrome.runtime.sendMessage({a_list: ali}, function(response) {
	console.log(response);
	href_set = new Set(response.a_records);
	for (i = 0; i < ali.length; i ++){
		if(href_set.has(ali[i])){
			rslt[i].style.display = "none"
		}
	}

})