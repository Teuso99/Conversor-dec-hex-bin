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
    var resultado = "";

    //Variável auxiliar para receber resto das divisões sucessivas
    var aux = "";
    
    //Loop que representa as divisões sucessivas
    do
    {
        //Switch para verificar se o módulo de aux é um valor maior que 10
        switch (numero % 16)
        {
            case 10:
                
                aux = aux.concat("A");
                break;
        
            case 11:
                
                aux = aux.concat("B");
                break;
        
            case 12:
                
                aux = aux.concat("C");
                break;
        
            case 13:
                
                aux = aux.concat("D");
                break;
        
            case 14:
                
                aux = aux.concat("E");
                break;
        
            case 15:
                
                aux = aux.concat("F");
                break;
        
            default:
                
                aux = aux.concat(numero % 16);
                break;
        }
        
        numero = Math.floor(numero/16);
    }
    while(numero != 0);

    //Transforma os elementos da variável auxiliar em instâncias de um vetor e inverte as posições 
    aux = aux.split("");
    aux.reverse();
    
    //Loop que concatena os valores na variável resultado
    for (let i = 0; i < aux.length; i++)
    { 
        resultado = resultado.concat(aux[i]);
    } 

    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;
}

function conversaoDecBin(numero)
{
    var resultado = "";
    
    //Variável auxiliar para receber resto das divisões sucessivas
    var aux = "";
    
    //Loop que representa as divisões sucessivas
    do
    {
        aux = aux.concat(numero % 2);
        numero = Math.floor(numero/2);
    }
    while(numero != 0);

    //Transforma os elementos da variável auxiliar em instâncias de um vetor e inverte as posições 
    aux = aux.split("");
    aux.reverse();
    
    //Loop que concatena os valores na variável resultado
    for (let i = 0; i < aux.length; i++)
    {
        resultado = resultado.concat(aux[i]);
    } 

    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;   
}

function conversaoHexDec(numero)
{
    var resultado = 0;

    //Verifica se o número possui mais de um algarismo para saber o valor da variável expoente
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

    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;
}

function conversaoHexBin(numero)
{
    var resultado = "";

    //Variável auxiliar para conversão dos algarismos
    var aux = "";

    //Loop para converter os algarismos um por vez
    for (let i = 0; i < numero.length; i++)
    {
        //Switch que converte um algarismo hexadecimal e armazena na variável aux
        switch (numero[i])
        {
            case "0":
                
                aux = "0000";
                break;
        
            case "1":
                
                aux = "0001";
                break;

            case "2":
                
                aux = "0010";
                break;
                     
            case "3":
                
                aux = "0011";
                break;

            case "4":
                
                aux = "0100";
                break;
        
            case "5":
                
                aux = "0101";
                break;
        
            case "6":
                
                aux = "0110";
                break;
        
            case "7":
                
                aux = "0111";
                break;

            case "8":
                
                aux = "1000";
                break;
                     
            case "9":
                
                aux = "1001";
                break;

            case "A":
                
                aux = "1010";
                break;
        
            case "B":
                
                aux = "1011";
                break;
        
            case "C":
                
                aux = "1100";
                break;
                     
            case "D":
                
                aux = "1101";
                break;

            case "E":
                
                aux = "1110";
                break;
        
            case "F":
                
                aux = "1111";
                break;
        
            default:
                break;
        }
        
        resultado = resultado.concat(aux);  
    }

    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;    
}

function conversaoBinDec(numero)
{
    var resultado = 0;
    
    //Variável que armazena o expoente a ser trabalhado nas multiplicações
    var exp = numero.length - 1;

    //Loop para multiplicar cada algarismo por 2 elevado ao expoente
    for (let i = 0; i < numero.length; i++)
    {
        resultado += numero[i] * 2 ** exp;
        exp--; 
    }
    
    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;
}

function conversaoBinHex(numero)
{
    var resultado = "";
    var aux = "";

    //Loop para separar os algarismos e convertê-los em grupos de 4
    for (let i = numero.length - 1; i >= 0; i--)
    {
        aux = numero[i] + aux;

        //If para tratar situação onde o(s) último(s) algarismos não completa(m) um grupo de 4
        if ((numero.length - i) > (numero.length - 1) && aux.length < 4)
        {
            //Switch que insere zeros a esquerda do(s) algarismo(s) restantes
            switch (aux.length)
            {
                case 1:
                    
                    aux = "000" + aux;
                    break;
            
                case 2:
                    
                    aux = "00" + aux;
                    break;
            
                case 3:
                    
                    aux = "0" + aux;
                    break;
            
                default:
                    break;
            }
        }
        
        //Quando a variável auxiliar possui quatro algarismos, a conversão é realizada
        if (aux.length == 4)
        {
            switch (aux)
            {
                case "0000":
                    
                    resultado = resultado.concat("0");
                    aux = "";
                    break;
            
                case "0001":
                    
                    resultado = resultado.concat("1");
                    aux = "";
                    break;
            
                case "0010":
                  
                    resultado = resultado.concat("2");
                    aux = "";
                    break;
                    
                case "0011":
                    
                    resultado = resultado.concat("3");
                    aux = "";
                    break;
                
                case "0100":
                        
                    resultado = resultado.concat("4");
                    aux = "";
                    break;
                
                case "0101":
                      
                    resultado = resultado.concat("5");
                    aux = "";
                    break;
                
                case "0110":
                    
                    resultado = resultado.concat("6");
                    aux = "";
                    break;
                
                case "0111":
                        
                    resultado = resultado.concat("7");
                    aux = "";
                    break;
                
                case "1000":
                      
                    resultado = resultado.concat("8");
                    aux = "";
                    break;
                        
                case "1001":
                        
                    resultado = resultado.concat("9");
                    aux = "";
                    break;
                    
                case "1010":
                            
                    resultado = resultado.concat("A");
                    aux = "";
                    break;
                    
                case "1011":
                          
                    resultado = resultado.concat("B");
                    aux = "";
                    break;

                case "1100":
                          
                    resultado = resultado.concat("C");
                    aux = "";
                    break;

                case "1101":
                          
                    resultado = resultado.concat("D");
                    aux = "";
                    break;

                case "1110":
                              
                    resultado = resultado.concat("E");
                    aux = "";
                    break;

                case "1111":
                                  
                    resultado = resultado.concat("F");
                    aux = "";
                    break;
                default:
                    break;
            }           
        }
    }

    //Inverte a ordem dos algarismos do resultado
    resultado = resultado.split("");
    resultado.reverse();
    resultado = resultado.join("");

    //Exibe o resultado no input
    document.getElementById("numero2").value = resultado;
}