function leer() {
	//referencia por Pseudoclase
	var nombre=document.forms["form"].elements[0].value;
	//referencia por Id
	var clave=document.getElementById("pass").value;

	var gen=document.getElementsByName("genero");
	var i, g;
	for (i = 0; i < gen.length; i++) {
		if (gen[i].checked) {
			g=gen[i].value;
		}
	}

	var car=document.getElementById("carrera").value;

	var p = document.getElementById("privacidad").checked;
	document.getElementById("datos").innerHTML=
	"\<br>Nombre: "+nombre+
	"\<br>password: "+clave+
	"\<br>Tu carrera es: "+car+
	"\<br>Tu género es: "+g+
	"\<br>Acepto el acuerdo: "+p;
}