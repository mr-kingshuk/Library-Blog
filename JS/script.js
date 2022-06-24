const hitem1 = document.querySelector('.i1');
const hitem2 = document.querySelector('.i2');
const ritem3 = document.querySelector('.i3');
const ritem4 = document.querySelector('.i4');

fetch("https://script.google.com/macros/s/AKfycbytz042kTz7jER3XLGRwtIDiO2UCkjgJXFs0CfbeC_kiErmSAcNYeFfeFUSdTJw0N-k/exec")
    .then(res => res.json())
    .then(data => {

        console.log(data.content);

        ritem3.querySelector(".title").innerHTML = data.content[1][0];
        ritem3.querySelector(".desc").innerHTML = data.content[1][1];

        ritem4.querySelector(".title").innerHTML = data.content[2][0];
        ritem4.querySelector(".desc").innerHTML = data.content[2][1];
        
    });

fetch("https://script.google.com/macros/s/AKfycbxIktXPeNzLwGlHOAUghu0DFe4bLARP9SR7Mg-Au1_3XCzbzvcJT-X_f1CE252tSfeX/exec")
    .then(res => res.json())
    .then(data => {
        hitem1.querySelector(".title").innerHTML = data.content[1][0];
        hitem1.querySelector(".desc").innerHTML = data.content[1][1];

        hitem2.querySelector(".title").innerHTML = data.content[2][0];
        hitem2.querySelector(".desc").innerHTML = data.content[2][1];
        
    });    