const hitem1 = document.querySelector('.i1');
const hitem2 = document.querySelector('i2');
const ritem3 = document.querySelector('.i3');
const ritem4 = document.querySelector('i4');

fetch("https://script.google.com/macros/s/AKfycbzJ0YExNeUs3OOhJ9bsZGkTuDidmSEnvHtOIPHC_YCk_asYf-pHhlMUZKGTl60MHZw/exec")
    .then(res => res.json())
    .then(data => {

        console.log(data.content);

        ritem3.querySelector(".title").innerHTML = data.content[1][0];
        ritem3.querySelector(".desc").innerHTML = data.content[1][1];

        ritem4.querySelector(".title").innerHTML = data.content[2][0];
        ritem4.querySelector(".desc").innerHTML = data.content[2][1];
        
    });

fetch("https://script.google.com/macros/s/AKfycbzHyn-cc57UYmpSm0wWPCUK44HBV3yUZ3xxuliO54JyIEHUg1CQ1SZdbEzdvbJZiv0p/exec")
    .then(res => res.json())
    .then(data => {
        ritem1.querySelector(".title").innerHTML = data.content[1][0];
        ritem1.querySelector(".desc").innerHTML = data.content[1][1];

        ritem2.querySelector(".title").innerHTML = data.content[2][0];
        ritem2.querySelector(".desc").innerHTML = data.content[2][1];
        
    });    