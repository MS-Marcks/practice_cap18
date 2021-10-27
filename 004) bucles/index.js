//let code = `for(){}`;
//let code = `for(){while(){}}`;
//let code = `for(){}while(){}`;
let code = ``;


let bloque = 0;
let countbucles = 0;
let aninado = false;
let token = "";
for (let index = 0; index < code.length; index++) {
    const caracter = code[index];
    if (caracter === " " || caracter === "(" || caracter === ")") {
        if (bloque > 0) {
            aninado = true;
        }
        countbucles += tokens(token);
        token = "";
    } else if (caracter === "{") {
        bloque++;
    } else if (caracter === "}") {
        bloque--;
    } else {
        token += caracter;
    }
}
if (countbucles === 1 && aninado === false) { console.log("Bucles simples") }
if (countbucles > 1 && aninado === true) { console.log("Bucles anidados") }
if (countbucles > 1 && aninado === false) { console.log("Bucles concatenado") }
if (countbucles === 0 && aninado === false) { console.log("no hay bucles") }
function tokens(token) {
    switch (token) {
        case "for":
            return 1;
        case "while":
            return 1;
        default:
            return 0;
    }
}

