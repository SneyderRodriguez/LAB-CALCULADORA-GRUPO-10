const prompt = require ("prompt-sync") ();
let n1= Number (prompt ("Ingrese el primer valor   "));
let ope=prompt ('Ingrese el signo de operación + - * /:    ');
let n2=Number (prompt ("Ingrese el segundo valor   "));
let resultado;

switch (ope){
    case "+" :
        resultado = n1 + n2;
        break
    case "-":
        resultado = n1 - n2;
        break
    case "/" :
        resultado = n1 / n2;
        break
    case "*":
        resultado = n1 * n2;
        break
    default:
        console.log("Invalido");
}console.log(resultado)