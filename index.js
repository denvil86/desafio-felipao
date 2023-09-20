//variaveis
let NivelDoHeroi = "Ouro";
let NomeDoHeroi = "Denvil";
let XpDoHeroi = 6999;

if (XpDoHeroi < 1000) {
    console.log(NivelDoHeroi = "Ferro ");
} else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2000) {
    console.log(NivelDoHeroi = "Bronze");
} else if (XpDoHeroi >= 2001 && XpDoHeroi <= 5000) {
    console.log(NivelDoHeroi = "Prata");
} else if (XpDoHeroi >= 6001 && XpDoHeroi <= 7000) {
    console.log(NivelDoHeroi = "Ouro")
} else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000) {
    console.log(NivelDoHeroi = "Platina")
} else if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000) {
    console.log(NivelDoHeroi = "Ascendente")
} else if (XpDoHeroi >= 9001 && XpDoHeroi <= 10000) {
    console.log(NivelDoHeroi = "Imortal")
} else {
    console.log(NivelDoHeroi = "Radiante")
}

console.log("O Heroi de nome ", (NomeDoHeroi), "esta no nivel ", (NivelDoHeroi));