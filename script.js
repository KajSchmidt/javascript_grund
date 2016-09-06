var p2state = 1;

function Toggle() {
	if (p2state == 1) {
		document.getElementById("paragraf2").style.display = "none";
		document.getElementById("toggleswitch").innerHTML = "Visa"
		p2state = 0;
	}
	else {
		document.getElementById("paragraf2").style.display = "inline";
		document.getElementById("toggleswitch").innerHTML = "Dölj"
		p2state = 1;
	}
}