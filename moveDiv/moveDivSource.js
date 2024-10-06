/**
 * 
 */

function init(){
	
	for(var i=1 ; i<4 ; i++){
		var clone_abs = $(".abs:first").clone();
		var lastTop = $(".abs:last").offset().top;
		clone_abs.offset({
			"top" : lastTop + 50
		});
		
		$("body").append(clone_abs);
	}
}