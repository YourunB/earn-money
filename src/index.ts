import './styles/normalize.sass';
import './styles/index.sass';

const main = document.createElement('main');
main.classList.add('main');

const sectionMoney = document.createElement('section');
sectionMoney.classList.add('section-money');

sectionMoney.innerHTML = `
  <h3 class="section-money__title">Зарабатывайте вместе с нами!</h3>
  <ul class="list">
    <li class="list__item"></li>
    <li class="list__item"></li>
    <li class="list__item"></li>
  </ul>
`;

main.append(sectionMoney);
document.body.append(main);
