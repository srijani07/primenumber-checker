var btnCheck = document.querySelector('#check-btn');
var input = document.querySelector('#input-area');
var output = document.querySelector('#output-txt');
function clickHandler() {
    
    var count=0;
    for(i=1;i<input.value;i++) {
        if(input.value%i === 0)
         count++;
}
if(count==1) {
 output.innerText = "It is prime";
}
else {
    output.innerText = "It is not prime";
}
}


btnCheck.addEventListener('click', clickHandler);