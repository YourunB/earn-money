import './styles/normalize.sass';
import './styles/index.sass';
import './assets/images/card1.png';
import './assets/images/card2.png';
import './assets/images/card3.png';

const main = document.createElement('main');
main.classList.add('main');

const sectionMoney = document.createElement('section');
sectionMoney.classList.add('section-money');

sectionMoney.innerHTML = `
  <h3 class="section-money__title">Зарабатывайте вместе с нами!</h3>
  <ul class="list">
    <li class="list__item">
      <img class="list__image" src="card1.png" alt="Info">
    </li>
    <li class="list__item">
      <img class="list__image" src="card2.png" alt="Info">
    </li>
    <li class="list__item">
      <img class="list__image" src="card3.png" alt="Info">
    </li>
  </ul>
`;

main.append(sectionMoney);
document.body.append(main);
