var toggle = false;

function toggler() {
	// window.alert("in");
	if(toggle){
		// window.alert("if");
		var x = document.getElementsByClassName("descr");
		for(i = 0; i < 6; i++){
			x[i].style.color = "#f5f5f5";
		}

		toggle = false;

	}
	else{
		// window.alert("else");
		var x = document.getElementsByClassName("descr");
		for(i = 0; i < 6; i++){
			x[i].style.color = "#444";
		}
		toggle = true;
	}
}