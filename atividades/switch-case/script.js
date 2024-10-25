//Desenvolva um programa que permite calcular o salário de um funcionário conforme a seleção específica (cargo) de um formulário HTML com o uso do (DOM - Document Object Model):

/*
Diretor - aumento de 10%;
Secretário - aumento de 20%;
Operador - aumento de 30%.
O programa deve apresentar o salário atualizado e o percentual aplicado. Utilize a estrutura de controle "switch-case" para controlar as ações do usuário por meio de um formulário.
*/

function calculateWage() {
    
    var wage = parseFloat(document.getElementById('wage').value);
    
    console.log(wage);

    var restult = document.getElementById('result');

    var jobPosition = document.getElementById('job-position').value;

    var increasePercentage;

    var wageWithIncrease = 0;

    switch (jobPosition) {
        case 'director':
            increasePercentage = wage * (10/100);
            wageWithIncrease = wage + increasePercentage;
            console.log(wage);
            restult.innerHTML = `O aumento no cargo de diretor é de R$${increasePercentage}. no total R$<strong>${wageWithIncrease.toFixed(2)}</strong>`;
            break;
        case 'secretary':
            increasePercentage = wage * (20/100);
            wageWithIncrease = wage + increasePercentage;

            restult.innerHTML = `O aumento no cargo de secretário é de R$${increasePercentage}. no total R$<strong>${wageWithIncrease.toFixed(2)}</strong>`;

            break;
        case 'operator':
            increasePercentage = wage * (30/100);
            wageWithIncrease = wage + increasePercentage;

            restult.innerHTML = `O aumento no cargo de operador é de R$${increasePercentage}. no total R$<strong>${wageWithIncrease.toFixed(2)}</strong>`;

            break;
    
        default:
            break;
    }

}