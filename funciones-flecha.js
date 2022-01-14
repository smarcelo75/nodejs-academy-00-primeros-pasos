const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => {
    let resultado;
    if (num2 === 0) {
        resultado = 'Error al dividir por cero!';
    } else {
        resultado = num1 / num2;
    }
    return resultado;
};


console.log('Nodejs Academy - Tarea 1');
console.log('Operaciones Matemáticas');
console.log(`Suma: ${suma(1, 20)}`);
console.log(`resta: ${resta(1, 20)}`);
console.log(`multiplicación: ${multiplicacion(2, 20)}`);
console.log(`división: ${division(20, 2)}`);