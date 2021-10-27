var val = [];//1
process.stdout.write("(PROMEDIO) INGRESE UN NUMERO [fin para finalizar]:");//2
process.stdin.on('data', function (i) { //3
    let data = i.toString().trim(); //4
    if (data === "fin") { //5 
        let average = 0; //6
        for (let index = 0; index < val.length; index++) { //7
            average += val[index]; //8
        }
        average = average / val.length; //9
        console.log(average.toFixed(2)); // 10
        process.exit(); //11
    } else if (!isNaN(parseFloat(data))) { //12
        val.push(parseFloat(data)); //13
    }
    process.stdout.write("(PROMEDIO) INGRESE UN NUMERO [fin para finalizar]:"); //14
});