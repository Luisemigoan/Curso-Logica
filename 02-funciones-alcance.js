Ejercicios:

 // 1 - Crea ejemplos de funciones básicas que representen las diferentesposibilidades del lenguaje:
 // Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 // Comprueba si puedes crear funciones dentro de funciones.
 // Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 // Pon a prueba el concepto de variable LOCAL y GLOBAL.

 //Solucion.
    // Función sin parámetros ni retorno.
   function simpleFunction() {
    console.log("Soy una función sin parametros ni retorno");
   }
   simpleFunction();

    // Función con un parámetro y sin retorno.
   function withParameter (name) {
    console.log(`Hola mi nombre es ${name}`);
   }
withParameter("Luis");

    // Función con varios parámetros y con retorno.
    function functionWithParametersAndRetunr(name, age, alias) {
        return `Hola mi nombre es ${name}, tengo ${age} años y me dicen ${alias}`;

    }
    console.log(functionWithParametersAndRetunr("Luis", 34, "Lucho"));

    // Función dentro de una función.
   function externa() {
    console.log("Función externa");
    function interna() {
        console.log("Función interna")
    }
    interna();
   }
   externa();

    // Función ya creada en el lenguaje.
    console.log(Math.random());
    console
  
    // Variable global.
    let variableGlobal = "Variable global";
    function funcionGlobal() {
        console.log(variableGlobal);
    }
    funcionGlobal();
    console.log(variableGlobal);

    /*// Variable local.
    function funcionLocal() {
        let variableLocal = "Variable local";
        console.log(variableLocal);
    }
    funcionLocal();
    console.log(variableLocal); // Error: variableLocal is not defined
    

    // Variable local en función anidada.
    function funcionAnidada() {
        let variableExterna = "Variable externa";
        function funcionInterna() {
            let variableInterna = "Variable interna";
            console.log(variableExterna);
            console.log(variableInterna);
        }
        funcionInterna();
    }
    funcionAnidada();
    console.log(variableExterna); // Error: variableExterna is not defined
    console.log(variableInterna); // Error: variableInterna is not defined
    */
    

 // DIFICULTAD EXTRA (opcional):
/*Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
  -La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
  - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
  - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
  - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
  - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
  */

    //Solucion.
 
  