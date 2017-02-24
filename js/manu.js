var refreshId = setInterval(function() {
	$(".carousel-item").attr('href').val=""
	var contador = 1;
	if (contador==3){
		contador =0;
	}

}, 3000);
