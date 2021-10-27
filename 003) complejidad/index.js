var val = {};
process.stdout.write("INGRESE LA CANTIDAD DE NODOS:");
let matriz = false;
let complejidad = 0;
let nodos = 0;
let aristas = 0;
process.stdin.on('data', (i) => {
    if (matriz === false) {
        let data = i.toString().trim();
        if (!isNaN(parseFloat(data))) {
            nodos = parseFloat(data);
            for (let i = 0; i < nodos; i++) {
                val[i] = [];
                for (let j = 0; j < nodos; j++) {
                    val[i].push(0);
                }
            }
            console.table(val);
            matriz = true;
            process.stdout.write("INGRESE LOS NODOS PARA UNIR CON LA ARISTA [EJEMPLO: 1,2]:");
        } else {
            process.stdout.write("INGRESE LA CANTIDAD DE NODOS:");
        }
    } else if (matriz === true) {
        let data = i.toString().trim();
        if (data === "fin") {
            console.log("V(G) = Arisitas - Nodos + 2 ");
            console.log("V(G) =", aristas, "-", nodos, "+2=", (aristas - nodos + 2));
            process.exit();
        }
        let n1 = parseFloat(data.split(",")[0]);
        let n2 = parseFloat(data.split(",")[1]);

        if (!isNaN((n1)) && !isNaN((n2))) {
            aristas++;
            val[n1-1][n2-1] = 1;
        }
        console.table(val);
        process.stdout.write("INGRESE LOS NODOS PARA UNIR CON LA ARISTA [EJEMPLO: 1,2]:");
    }
});