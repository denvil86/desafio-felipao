//iniciar projeto
console.log ("vamos começar");
//variaveis
let NivelDoHeroi = "Ouro";
let NomeDoHeroi = "Denvil";
let XpDoHeroi = 6999;

switch (true){
    case XpDoHeroi < 1000: 
        NivelDoHeroi = "Ferro ";
        break;
    case XpDoHeroi >= 1001 && XpDoHeroi <= 2000:
        NivelDoHeroi = "Bronze";
        break;
    case XpDoHeroi >= 2001 && XpDoHeroi <= 5000:
        NivelDoHeroi = "Prata";
        break;
    case XpDoHeroi >= 6001 && XpDoHeroi <= 7000:
        NivelDoHeroi = "Ouro";
        break;
    case XpDoHeroi >= 7001 && XpDoHeroi <= 8000:
        NivelDoHeroi = "Platina";
        break;
    case XpDoHeroi >= 8001 && XpDoHeroi <= 9000:
        NivelDoHeroi = "Ascendente";
        break;
    case XpDoHeroi >= 9001 && XpDoHeroi <= 10000:
    NivelDoHeroi = "Imortal";
        break;
    default:
    NivelDoHeroi = "Radiante";
    break;
     
    
// Saida
console.log('O Heroi de nome'{NomeDoHeroi} 'esta no nivel de'{NivelDoHeroi});
