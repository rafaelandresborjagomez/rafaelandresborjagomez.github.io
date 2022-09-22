//aplicacion para evaluar la fiebre de una persona
var temp ;

//captura los datos de entrada
temp=parseFloat(prompt)("ingrese su temperatura °c:");

//proceso para evaluar la fiebre
if (temp >=38) {
 document.write("la temperatura" +temp+ "°c indica fiebre");


}else{
    document.write("la temperatura" +temp+ "°c indica sin fiebre");

}