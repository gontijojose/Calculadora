function calculadora(opt, n1, n2) {
    var res;

    switch (opt) {
        case "Adição":
            res = n1 + n2;
            break;
        case "Subtração":
            res = n1 - n2;
            break;
        case "Multiplicação":
            res = n1 * n2;
            break;
        case "Divisão":
            if (n2 == 0) {
                res = "Dividendo Inválido"
                alert('O dividendo não pode ser zero, digite novamente')
            }
            else
                res = n1 / n2;
            break;
    }
    return document.getElementById("res").innerHTML = res;
}
function printSelectedItem() {
    var e = document.getElementById("opt");
    var selectedItem = e.options[e.selectedIndex].value;
    document.getElementById("operacao").innerHTML = selectedItem;
    switch (selectedItem) {
        case "Adição":
            document.getElementById("sinal").innerHTML = "+";
            break;
        case "Subtração":
            document.getElementById("sinal").innerHTML = "-";
            break;
        case "Multiplicação":
            document.getElementById("sinal").innerHTML = "x";
            break;
        case "Divisão":
            document.getElementById("sinal").innerHTML = "÷";
            break;
    }
}