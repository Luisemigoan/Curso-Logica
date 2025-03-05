//Ejercicios:

 // 1- Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje: Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits... (Ten en cuenta que cada lenguaje puede poseer unos diferentes).
    let num1 = 10;
    let num2 = 5;
    let num3 = 5;
    let num4 = 10;
    let num5 = 5;
    let num6 = 10;
    let num7 = 5;

    // Aritméticos: Suma, resta, multiplicación, división, módulo, potencia
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % num2);
    console.log(num1 ** num2);

    // Lógicos: AND, OR, NOT
    console.log(num3 == num4 && num5 == num6);
    console.log(num3 == num4 || num5 == num6);
    console.log(!(num3 == num4 && num5 == num6));

    // Comparación: Igualdad, desigualdad, menor que, mayor que, menor o igual que, mayor o igual que
    console.log(num3 == num4);
    console.log(num3 != num4);
    console.log(num3 < num4);
    console.log(num3 > num4);
    console.log(num3 <= num4);
    console.log(num3 >= num4);

    // Asignación: Suma, resta, multiplicación, división, módulo, potencia
    console.log(num7 += num1);
    console.log(num7 -= num1);
    console.log(num7 *= num1);
    console.log(num7 /= num1);
    console.log(num7 %= num1);
    console.log(num7 **= num1);

    // Identidad: Igualdad estricta, desigualdad estricta
    console.log(num3 === num4);
    console.log(num3 !== num4);

    // Pertenencia: Incluido en, no incluido en
    let arr = [1, 2, 3, 4, 5];
    console.log(1 in arr);
    console.log(6 in arr);

    // Bits: AND, OR, XOR, NOT, desplazamiento a la izquierda, desplazamiento a la derecha, desplazamiento a la derecha sin signo
    console.log(num1 & num2); // 1010 & 0101 = 0000
    console.log(num1 | num2); // 1010 | 0101 = 1111
    console.log(num1 ^ num2); // 1010 ^ 0101 = 1111
    console.log(~num1); // ~1010 = 0101
    console.log(num1 << num2); // 1010 << 0101 = 101000
    console.log(num1 >> num2); // 1010 >> 0101 = 0000
    console.log(num1 >>> num2); // 1010 >>> 0101 = 0000

 // 2 - Utilizando las operaciones con operadores que tú quieras, crea ejemplos que representen todos los tipos de estructuras de control que existan en tu lenguaje: Condicionales, iterativas, excepciones...
    // Condicionales
    if (num1 > num2) {
        console.log("num1 es mayor que num2");
    } else if (num1 < num2) {
        console.log("num1 es menor que num2");
    } else {
        console.log("num1 es igual que num2");
    }

    // Iterativas
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

    i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);

    // Excepciones
    try {
        throw "Error";
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Finally");
    }

 // 3 - hacer print por consola del resultado de todos los ejemplos.
// ya se ha hecho en los ejemplos anteriores

 
 // 4 - DIFICULTAD EXTRA (opcional): Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
    for (let i = 10; i <= 55; i++) {
        if (i % 2 == 0 && i != 16 && i % 3 != 0) {
            console.log(i);
        }
    }

