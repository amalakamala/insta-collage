var boton = document.getElementById("boton-inicio");
boton.addEventListener("click", function(){
	var usuario = document.getElementById("username");
	var password = document.getElementById("password");	

	var usuarioOk = document.getElementsByClassName("input-group")[0];
	var passwordOk = document.getElementsByClassName("input-group")[1];

	var elBoton = document.getElementsByClassName("el-boton")[0];

	if(usuario.value == ""){
		var respuestaUs = document.createElement("span");  
      	respuestaUs.classList.add("el-span")
      	var textoUs = document.createTextNode("ingrese un usuario");
      	respuestaUs.appendChild(textoUs);   
      	usuarioOk.appendChild(respuestaUs);
	}else{
		elBoton.setAttribute("href","gallery.html");
	}

	if((password.value == "") || (password.value == 123456) || (password.value.length < 5) || (password.value.length > 7 )) {
		var respuestaPs = document.createElement("span");  
      	respuestaPs.classList.add("el-span")
      	var textoPs = document.createTextNode("ingrese un password");
      	respuestaPs.appendChild(textoPs);   
      	passwordOk.appendChild(respuestaPs);
	}else{
		elBoton.setAttribute("href","gallery.html");
	}

})



function drag(ev){ //ev de event es lo mismo, los atributos pueden variar
	ev.dataTransfer.setData('text', ev.target.id);
	//img se lee como text en el navegador
	//target es el objetivo 
}


function finalDrop(ev){
	ev.preventDefault(); 
	//SIEMPRE se pondrá esto 

}

function drop(ev){
	ev.preventDefault();
	var dato = ev.dataTransfer.getData('text');
	//getData trae.. sin el ev.target.id
	ev.target.appendChild(document.getElementById(dato));	
}