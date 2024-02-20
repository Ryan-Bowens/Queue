
var input = document.getElementsByClassName(`input`);
var token = document.getElementById(`token`);
var destroy = document.getElementById(`destroy`);
var resultd = document.getElementById(`resultdesc`);
var resultv = document.getElementById(`resultvalue`);

function buttonClick() {
    resultv.innerText=
    `K.${input[0].value}/D.${input[1].value}/A.${input[2].value}`;
    resultd.style.visibility = "visible";
    resultd.innerText=
    `${input[0].value} Tokens
    ${input[1].value * 2} Pushups
    ${Math.floor((Math.random() * input[2].value + 1))} Squats
    Note: You may use tokens to deduct any amount from either exercise`
}
function buttonClick2(){
    resultv.innerText=
    `K.${input[0].value}/D.${input[1].value}/A.${input[2].value}`;
    resultd.style.visibility = "visible";
    resultd.innerText=
    `${input[0].value * 2} Situps
    ${input[1].value * 3} Pushups
    ${Math.floor((Math.random() * input[2].value + 1)*2)} Squats
    Note: Harder workout; for your safety do not rush. At least 30sec of rest between.`
}
token.addEventListener(`click`, buttonClick)
destroy.addEventListener(`click`, buttonClick2)

