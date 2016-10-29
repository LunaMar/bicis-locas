function validateForm(){
	

var nombre = document.getElementById("name").value;


function validateForm(){
	valor = document.getElementById("name").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  	return false;                                                      // si el largo es igual a 0, si el valor es igual a null, o si no es una frase regular)
  	alert("Ingrese Nombre");
}
	if(!soloLetras.test(nombre)){
		alert("Ingrese solo letras");     
		return false;                                                  //hasta aca solo se valida el nombre 
	}

var apellido = document.getElementById("lastname").value;
if (apellido == ""){
	alert ("Debe ingresar apellido");
	return false;
}
if(!soloLetras.test(apellido)){
		alert("Ingrese solo letras");                                   //valida apellido, que solo tenga letras, y que no sea espacio en blanco 
		return false;    


	



/* valor = document.getElementById("input-email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}   validacion correo */