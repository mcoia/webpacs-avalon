function hideLinks(){
    
    var stringsToHide = new Array ();
    stringsToHide[1] = new Array ("centralmethodist");
    stringsToHide[3] = new Array ("Missouri Valley", "moval");
	stringsToHide[4] = new Array ("State Fair", "SFCC");
	stringsToHide[6] = new Array ("A.T. Still", "atsu");
	stringsToHide[7] = new Array ("Culver-Stockton");
	stringsToHide[8] = new Array ("hlg");
	stringsToHide[9] = new Array ("State Tech", "STATE TECH");
	stringsToHide[10] = new Array ("MACC");
	stringsToHide[11] = new Array ("Truman", "truman", "TRUMAN");
    


    var scopeDropdown = $("#searchscope").val();
    
    delete stringsToHide[scopeDropdown];
	
    if ($("table").is('.bibLinks')){
	for (var k in stringsToHide) {
	    for (var l in stringsToHide[k]) {
		$(".bibLinks a").each(function(index, element) {
		    if($(element).parent().html().indexOf(stringsToHide[k][l]) > -1) {
			$(element).parent().parent().hide()
		    }    
		});
	    }
	}
	if ($(".bibLinks tr[style*=none]").length < $(".bibLinks a").length){
	    $(".bibLinks").show();       
	}
    }  
}
    
    
    $(document).ready(function () {
	hideLinks();
});