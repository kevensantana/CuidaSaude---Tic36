const menuIcon = document.getElementById('menu-icon')
const navLinks = document.getElementById('links')
const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  body.classList.toggle('menu-open')
})


// seções

const menuLinks = document.querySelectorAll('a');
const sections = document.querySelectorAll('.content-section');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        const sectionId = link.getAttribute('data-section');

        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
        menuLinks.forEach(link => link.classList.remove('active'));
        
        link.classList.add('active');

        const navLinks = document.getElementById('links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});


// calcular o IMC
document.getElementById('imc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);

 
  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      document.getElementById('resultado-imc').textContent = 'Por favor, insira valores válidos.';
      return;
  }


  const imc = (peso / (altura * altura)).toFixed(2);


  let classificacao = '';

  if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
      classificacao = 'Sobrepeso';
  } else {
      classificacao = 'Obesidade';
  }

  document.getElementById('resultado-imc').textContent = `Seu IMC é ${imc} (${classificacao})`;
});
