function train(model) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4)
			if ((xmlhttp.status == 200)||(xmlhttp.status==0)) {
				T=0;
				var train=xmlhttp.responseText.split("\n");
				for (var i=0;i<train.length;i++) {
					var line=train[i].trim();				
					if (line&&(line[0]!="#")) {
						I.value=line;
						I.onkeyup({keyCode:13});
					}
				}
				I.value="";
				O.innerText="(Trained with "+model+" model)";
				T=1;
			}
	};
	xmlhttp.open("GET", "personalities/"+model+".trn", true);
	xmlhttp.send();
}

window.addEventListener('load', function() {
	if (window.location.hash) train(window.location.hash.substr(1));
},false);
