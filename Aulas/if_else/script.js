var btn = document.getElementById('btn-calculate-age');

function calculateAge(){
    var bdayInput = document.getElementById('bday-input').value;
    console.log(bdayInput);

    var bday = new Date(bdayInput);

    var today = new Date();
    console.log(today);

    var age = today.getFullYear() - bday.getFullYear();
    console.log(age);

    var result = document.getElementById('age-result');

    var monthDifference = today.getMonth() - bday.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < bday.getDate())) {
        age--;
    }

    if(age >= 18){
        result.innerText = `Você possui ${age} anos e é maior de idade`;
    } else{
        result.innerText = `Você possui ${age} anos e é menor de idade`;
    }   
    
}