const prompt = require ("prompt-sync") ();
let activo = true;
let saldo = 5000000;
let datos= (prompt ("Ingrese Nombre y Apellido:  "));

while (activo === true){
    console.log("Operaciones permitidas:\n 1. retiro \n 2. avance\n 3. consignación \n4. Salir")
    let operacion = prompt  ("Que operación desea realizar====>")
    let resultado;
    let op; 
    
    switch (operacion){
    case "1" :
        let retiro = Number (prompt ("Ingrese el monto del retiro    "));
        resultado = saldo - retiro;
        op = "retiro";
        break
    case "2":
        let avance = Number (prompt ("Ingrese el monto del avance   "));
        resultado = saldo - avance;
        op = "avance";
        break
    case "3" :
        let consig = Number (prompt ("Ingrese el monto a consignar   "));
        resultado = saldo + consig;
        op = "consignación";
        break
    case "4":
        activo = false;
    }console.log(resultado)

    console.log("Hola:", datos, "usted realizo un" , op, "y su saldo restante es:" , resultado);

}