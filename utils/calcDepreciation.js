function getMonths(DataCompra){

    var dataCompra = new Date(DataCompra);
    var today = new Date();
    var meses = 0;
        meses = (today.getFullYear() - dataCompra.getFullYear()) * 12;   
    meses = meses - dataCompra.getMonth();
    meses = meses + today.getMonth();
    return meses;   
    
}

function formatCurrency(Valor){
    return parseFloat(Valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

// Converter o valor que vem do banco de dados para número.
function calc(ValorCompra, DataCompra){
    console.log(ValorCompra);

    var floatCompra = parseFloat(ValorCompra);
    
    var depreciation = floatCompra * 0.2 / 12; //Valor mensal
    var somaMeses = depreciation * getMonths(DataCompra);
    var depreCalc = floatCompra - somaMeses;

    console.log(floatCompra);
    console.log(depreCalc);

    return formatCurrency(depreCalc);
    

}



export {
    getMonths,
    calc,
    formatCurrency
}