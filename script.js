//Evento para controlar o getElementById apenas depois do carregamento do DOM
window.onload = function()
{
    //Armazena o botão de envio em uma variável
    var btn = document.getElementById("btnConverter");
    
    //Seta um Listener no botão, dispara onclick
    btn.addEventListener("click", conversao, false);
}

//função auxiliar para descobrir qual conversão será realizada
function conversao()
{
    var numero = document.getElementById("numero1").value;
    
    //Decimal -> Hexadecimal
    if (document.getElementById("conversao1").checked)
    {
        conversaoDecHex(numero);
    }
    //Decimal -> Binário
    else if (document.getElementById("conversao2").checked)
    {
        conversaoDecBin(numero);   
    }
    //Hexadecimal -> Decimal
    else if (document.getElementById("conversao3").checked)
    {
        conversaoHexDec(numero);
    }
    //Hexadecimal -> Binário
    else if (document.getElementById("conversao4").checked)
    {
        conversaoHexBin(numero);
    }
    //Binário -> Decimal
    else if (document.getElementById("conversao5").checked)
    {
        conversaoBinDec(numero);
    }
    //Binário -> Hexadecimal
    else if (document.getElementById("conversao6").checked)
    {
        conversaoBinHex(numero);
    }
    //Não houve seleção
    else
    {
        alert("Nenhuma opção de conversão foi selecionada");
    }
}

function conversaoDecHex(numero)
{
    alert("conversaoDecHex");
}

function conversaoDecBin(numero)
{
    alert("conversaoDecBin");    
}

function conversaoHexDec(numero)
{
    var resultado = 0;
    var negativo = false;

    if (numero[0] === "-")
    {
        negativo = true;        
    }

    if (numero.length > 1)
    {
        var exp = 16 * (numero.length - 1);        
    }
    else
    {
        var exp = 1;        
    }

    for (let i = 0; i < numero.length; i++)
    {
        //verifica se o caracter na posição i é um número
        if (numero[i] >= 0 && numero[i] <= 9)
        {
            resultado += numero[i] * exp;
        }
        else
        {
            //caso o caracter não seja numérico, o valor é convertido
            //para o número correspondente
            switch (numero[i])
            {
                case "A":
                    resultado += 10 * exp;
                    break;
            
                case "B":
                    resultado += 11 * exp;
                    break;
            
                case "C":
                    resultado += 12 * exp;
                    break;
            
                case "D":
                    resultado += 13 * exp;
                    break;
                
                case "E":
                    resultado += 14 * exp;
                    break;
                
                case "F":
                    resultado += 15 * exp;
                    break;
            }
        }

        exp /= 16;    
    }

    //Converte o resultado caso o mesmo deva ser negativo
    if (negativo)
    {
        resultado *= -1;        
    }

    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;
}

function conversaoHexBin(numero)
{
    alert("conversaoHexBin");    
}

function conversaoBinDec(numero)
{
    alert("conversaoBinDec");
}

function conversaoBinHex(numero)
{
    alert("conversaoBinHex");
}