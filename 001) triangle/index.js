$(document).ready(function () {
    $("#b").click(function () {
        let pa = parseFloat($("#pa").val());
        let sa = parseFloat($("#sa").val());
        let ta = parseFloat($("#ta").val());
        let r = $("#r");
        r.html("");
        if (isNaN(pa) || isNaN(sa) || isNaN(ta)) { //1 2 3
            r.html("debe de ingresar numeros,no texto y debe ingresar"); //4
            return;
        }
        if ((pa % 1) !== 0 || (sa % 1) !== 0 || (ta % 1) !== 0) { // 5 6 7
            r.html("los numero deben de ser enteros"); // 8
            return;
        }
        if (pa < 0 || sa < 0 || ta < 0) { // 9 10 11
            r.html("los numeros deben de positivos"); // 12
            return;
        }
        if ((pa + sa + ta) !== 180) { //13
            r.html("no es posible porque la suma de los angulos es mayor a 180");//14
            return;
        }
        if (pa === sa && sa === ta) { //15 16
            r.html("es un triangulo equilatero");//17
        } else {
            if (pa !== sa && sa !== ta) { //18 19
                r.html("es un triangulo escaleno"); //20
            } else {
                if ((pa === sa) || (pa === ta) || (ta === sa)) { //21 22 23
                    r.html("es un triangulo isoceles");//24
                }
            }
        }
    })
})