$( document ).ready(function() {		
    $(".menu").click(function(){		
		$("#dropdown_nav").toggleClass("open");	
		console.log("Toggled the class!");
	});
});