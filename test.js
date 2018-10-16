document.addEventListener("DOMContentLoaded", ()=>{
	chrome.tabs.executeScript(null, {file: "content_script.js"})
})
// chrome.runtime.onMessage.addListener(
//   function(req, sender, sendRes){
//    var sendItems = {};
//     console.log(sender.tab.url);
//     chrome.storage.local.get("a_records", (items)=>{
//     	sendItems = items;
//     	var aSet = new Set();
//     	if (items.a_records) {
//     		aSet = new Set(items.a_records);
//     	}
//     	    if(req.a_list){
// 	    	var ali = req.a_list;
// 	    	for (i = 0; i < ali.length; i ++){
// 	    		if(!aSet.has(ali[i])){
// 	    			aSet.add(ali[i])
// 	    		}
// 	    	}
// 	    	a_records = Array.from(aSet);
// 	    	chrome.storage.local.set({"a_records": a_records});
// 	    }
//     })
//     sendRes(sendItems)
	
// })


chrome.storage.local.get("a_records", (items)=>{
    	chrome.runtime.onMessage.addListener(
	 function(req, sender, sendRes){
	 console.log(sender.tab.url);
	 var aSet = new Set();
    	if (items.a_records) {
    		aSet = new Set(items.a_records);
    	}
    	if(req.a_list){
	    	var ali = req.a_list;
	    	for (i = 0; i < ali.length; i ++){
	    		if(!aSet.has(ali[i])){
	    			aSet.add(ali[i])
	    		}
	    	}
	    	a_records = Array.from(aSet);
	    	chrome.storage.local.set({"a_records": a_records});
	 }

	 sendRes(items)
    	})
})


	