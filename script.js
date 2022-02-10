function calcular(tipo, valor) {
    if(valor === 'c') {
        document.getElementById('visor').value = '';
    } else if(valor === '=') {
        var valorVisor = eval(document.getElementById('visor').value)
        document.getElementById('visor').value = valorVisor 
    } else if(tipo === 'acao') {
        document.getElementById('visor').value += valor;
    } else if(tipo === 'numero') {
        document.getElementById('visor').value += valor;
    }
}