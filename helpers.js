//Calculo para valor Inflação
function inflacao(invest, aporte, meses, inflacao) {
    var consolidado = 0;

    for (var i = 0; i < (meses + 1); i++) {
        var prazo = meses - i;

        var vlr_inicial = (i == 0) ? invest + aporte : aporte;

        var tx_inflacao = Math.pow((1 + (inflacao / 100)), 1 / 12) - 1;
        var vlr_resgate = vlr_inicial * Math.pow((1 + tx_inflacao), prazo);

        consolidado += vlr_resgate;
    }

    var result = consolidado - aporte;

    return result;
}

//Calculo para valor LCI e LCA (85% CDI)
function lcilca(invest, aporte, meses, cdi, lci_lca) {
    var consolidado = 0;

    for (var i = 0; i < (meses + 1); i++) {
        var prazo = meses - i;
        var tx_ir = 0;

        var vlr_inicial = (i == 0) ? invest + aporte : aporte;

        var mod1 = 1 + ((Math.pow(1 + (cdi / 100), 1 / 12) - 1) * (lci_lca / 100));
        var mod2 = Math.pow(mod1, prazo) - 1;
        var mod3 = mod2 * (1 - tx_ir);

        var vlr_resgate = mod3 * vlr_inicial + vlr_inicial;

        consolidado += vlr_resgate;
    }

    var result = consolidado - aporte;

    return result;
}

//Calculo para valor CDB
function cdb(invest, aporte, meses, cdi, cdb) {
    var consolidado = 0;

    for (var i = 0; i < (meses + 1); i++) {
        var prazo = meses - i;
        var tx_ir = (prazo <= 6) ? getTaxas().tabela.zero :
            (prazo > 6 && prazo <= 12) ? getTaxas().tabela.seis :
            (prazo > 12 && prazo <= 24) ? getTaxas().tabela.doze :
            (prazo > 24) ? getTaxas().tabela.vinte_quatro : 0;

        var vlr_inicial = (i == 0) ? invest + aporte : aporte;

        var mod1 = 1 + ((Math.pow(1 + (cdi / 100), 1 / 12) - 1) * (cdb / 100));
        var mod2 = Math.pow(mod1, prazo) - 1;

        var vlr_resgate = mod2 * (1 - (tx_ir / 100)) * vlr_inicial + vlr_inicial;

        consolidado += vlr_resgate;
    }

    var result = consolidado - aporte;

    return result;
}

//Calculo para valor Fundos DI
function fundosDI(invest, aporte, meses, rentabilidade, cdi, fundodi) {
    var consolidado = 0;

    for (var i = 0; i < (meses + 1); i++) {
        var prazo = meses - i;
        var tx_ir = (prazo <= 6) ? getTaxas().tabela.zero :
            (prazo > 6 && prazo <= 12) ? getTaxas().tabela.seis :
            (prazo > 12 && prazo <= 24) ? getTaxas().tabela.doze :
            (prazo > 24) ? getTaxas().tabela.vinte_quatro : 0;

        var vlr_inicial = (i == 0) ? invest + aporte : aporte;

        var pot1 = 1 + (rentabilidade / 100) * Math.pow(1 + (cdi / 100), 1 / 12) - 1;
        var rent_bruta = (Math.pow(pot1, prazo) - 1) * 100;

        var mod1 = 1 + (rentabilidade / 100) * (Math.pow(1 + (cdi / 100), 1 / 12) - 1);
        var mod2 = mod1 - (Math.pow(1 + (fundodi / 100), 1 / 12) - 1);
        var mod3 = Math.pow(mod2, prazo) - 1;

        var vlr_resgate = vlr_inicial * (mod3 * (1 - (tx_ir / 100))) + vlr_inicial;

        consolidado += vlr_resgate;
    }

    var result = consolidado - aporte;

    return result;
}

//Calculo para valor Poupança
function poupanca(invest, aporte, meses, selic, tr) {
    var consolidado = 0;

    for (var i = 0; i < (meses + 1); i++) {
        var prazo = meses - i;
        var vlr_inicial = (i == 0) ? invest + aporte : aporte;

        var base1 = (100 + 0.7 * selic) / 100;
        var base2 = (100 / 12) / 100;

        var taxa1 = ((Math.pow(base1, base2) - 1) + (tr / 100)) * 100;
        var taxa2 = 0.5 + tr;
        var taxa = (selic < 8.5) ? taxa1 : taxa2;

        var ResgBase = (100 + taxa) / 100;
        var ResgPotenc = Math.pow(ResgBase, prazo);
        var vlr_resgate = vlr_inicial * ResgPotenc;

        consolidado += vlr_resgate;
    }

    var result = consolidado - aporte;

    return result;
}

//Calculo para valor Tesouro Direto LFT
function tesouroDireto(invest, aporte, meses, corretagem, selic, tesouro_direto) {
    var consolidado = 0;

    for (var i = 0; i < (meses + 1); i++) {
        var prazo = meses - i;
        var tx_ir = (prazo <= 6) ? getTaxas().tabela.zero :
            (prazo > 6 && prazo <= 12) ? getTaxas().tabela.seis :
            (prazo > 12 && prazo <= 24) ? getTaxas().tabela.doze :
            (prazo > 24) ? getTaxas().tabela.vinte_quatro : 0;

        var vlr_inicial = (i == 0) ? invest + aporte : aporte;

        var vlr_invest = (vlr_inicial / (100 + corretagem)) * 100;

        var tx_corretagem = vlr_invest * (corretagem / 100);

        var vlr_base = (100 + selic) / 100;
        var vlr_potencia = prazo / 12;
        var resgate_bruto = vlr_invest * Math.pow(vlr_base, vlr_potencia);

        var tx_custodia = ((tesouro_direto / 100) * (prazo / 12)) * ((vlr_invest + resgate_bruto) / 2);
        var tx_admin = (prazo > 12) ? ((corretagem / 100) * ((prazo - 12) / 12)) * ((vlr_invest + resgate_bruto) / 2) : 0;
        var vlr_ir = (tx_ir / 100) * (resgate_bruto - vlr_invest);
        var vlr_resgate = resgate_bruto - tx_custodia - tx_admin - vlr_ir;

        consolidado += vlr_resgate;
    }

    var result = consolidado - aporte;

    return result;
}


//Consulta arquivo JSON de Taxas e retorna em formato de Objeto
var parseJSON = $.ajax({
    url: 'http://media.folha.uol.com.br/mercado/2015/03/24/taxa.json',
    async: false,
    dataType: "jsonp",
    jsonpCallback: 'taxas'
});

function getTaxas() {
    var objTaxas = parseJSON.responseJSON;

    objTaxas.tabela.doze = +objTaxas.tabela.doze;
    objTaxas.tabela.seis = +objTaxas.tabela.seis;
    objTaxas.tabela.vinte_quatro = +objTaxas.tabela.vinte_quatro;
    objTaxas.tabela.zero = +objTaxas.tabela.zero;
    objTaxas.taxa.cdb = +objTaxas.taxa.cdb;
    objTaxas.taxa.cdi = +objTaxas.taxa.cdi;
    objTaxas.taxa.corretagem = +objTaxas.taxa.corretagem;
    objTaxas.taxa.fundodi = +objTaxas.taxa.fundodi;
    objTaxas.taxa.inflacao = +objTaxas.taxa.inflacao;
    objTaxas.taxa.lci_lca = +objTaxas.taxa.lci_lca;
    objTaxas.taxa.rentabilidade = +objTaxas.taxa.rentabilidade;
    objTaxas.taxa.selic = +objTaxas.taxa.selic;
    objTaxas.taxa.tesouro_direto = +objTaxas.taxa.tesouro_direto;
    objTaxas.taxa.tr = +objTaxas.taxa.tr;

    return objTaxas;
}

//Formata moeda em formato br-pt
function numberFormat(num) {
    return num
        .toFixed(2)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}

function decimalFormat(num) {
    return num
        .replace(/[\(\)\.\s-]+/g, '')
        .replace(",", ".")
}

//Função para restrição - formata campo texto
var digitsOnly = /[1234567890]/g;
var integerOnly = /[0-9\.]/g;
var alphaOnly = /[A-Z]/g;
var alphaNumeric = /[a-z0-9 ]/g;

function restrictCharacters(myfield, e, restrictionType) {
    if (!e) var e = window.event
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);

    if (code == 27) {
        this.blur();
        return false;
    }

    if (!e.ctrlKey && code != 9 && code != 8 && code != 36 && code != 37 && code != 38 && (code != 39 || (code == 39 && character == "'")) && code != 40) {
        if (character.match(restrictionType)) {
            return true;
        } else {
            return false;
        }
    }
}


//Mascara para moeda
function MascaraMoeda(e, valor) {
    if (mascaraInteiro(valor) == false) {
        e.returnValue = false;
    }

    return formataCampo(valor, '00,00', e);
}

function mascaraInteiro(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
        return false;
    }

    return true;
}
