const $textArea = document.getElementById("text-area");
const $inputNumber = document.getElementById("input-number");
const $button = document.getElementById("button");
const $copyBtn = document.getElementById("copy-btn");
const $message = document.getElementById("message");

$inputNumber.addEventListener("change", (e) => {
  numberOfParagraphs = e.target.value;
});

$button.addEventListener("click", generateParagraphs);

$copyBtn.addEventListener("click", handleBtnCopy);

window.addEventListener("load", generateParagraphs);

let numberOfParagraphs = 1;

const ipsum = [
  "O Brasil está lascado! ",
  "Brasiiiiiil Meeeu Deeeeeeeeeeeeeeu Meu Deusss Aiiiiiiiiii Meu Deeeeeeus Brasiiiiil Meu Deus. ",
  "Tchaki tchaki tchaki tcha. ",
  "A cobra foi descoberta, tentando fazer jogo sujo. Deus é maravilhoso, Deus é maravilhoso. ",
  "Eu não vim do lixo pra perder pra basculho não, meu amor. ",
  "Votem em mim todo mundo. Podem votar. Eu me solto. Estou indignado. AHHHHHHH Estou indignado. Eu não aguento mais. Chega, me bota no paredão. Eu quero sair. Tirem-me daqui. Eu vou sair. Acabou, acabou, acabou, acabou. ",
  "Meu deus, o que é aquilo ali? produção? Eu vejo a luz. ",
  "Cachorraaada! ",
  "Eu me regozijei, eu fiz cachorrada ",
  "Eu sou uma gatinha. Sou uma felina sem vergonha. Ai, Brasil! "
];

function generateParagraphs() {
  $textArea.innerHTML = "";

  for (let index = 0; index < numberOfParagraphs; index++) {
    const randomNumber = Math.floor(Math.random() * ipsum.length);
    $textArea.innerHTML += ipsum[randomNumber];
  }
}

function handleBtnCopy() {
  $textArea.select();
  document.execCommand("copy");

  console.log($message);

  $message.style.opacity = 1;

  setTimeout(() => {
    $message.style.opacity = 0;
  }, [2000]);
}
