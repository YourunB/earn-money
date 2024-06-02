import './styles/normalize.sass';
import './styles/index.sass';
import './assets/images/card1.png';
import './assets/images/card2.png';
import './assets/images/card3.png';
import './assets/images/partner.svg';

const main = document.createElement('main');
main.classList.add('main');

const sectionMoney = document.createElement('section');
sectionMoney.classList.add('section-money');

sectionMoney.innerHTML = `
  <h3 class="section-money__title">Зарабатывайте вместе с нами!</h3>
  <ul class="list">
    <li class="list__item">
      <div class="card-header">
        <span class="card-header__number card-header__number_color1">1</span>
        <span class="card-header__text card-header__text_width1">Получите партнерскую ссылку</span>
      </div>
      <div class="card">
        <img class="card__image" src="card1.png" alt="Info">
      </div>
    </li>
    <li class="list__item">
      <div class="card-header">
        <span class="card-header__number card-header__number_color2">2</span>
        <span class="card-header__text card-header__text_width2">Расскажите о IIII.COM</span>
      </div>
      <div class="card">
        <img class="card__image" src="card2.png" alt="Info">
      </div>
    </li>
    <li class="list__item">
      <div class="card-header">
        <span class="card-header__number card-header__number_color3">3</span>
        <span class="card-header__text card-header__text_width3">Получайте хороший процент от покупок по вашей ссылке!</span>
      </div>
      <div class="card">
        <img class="card__image" src="card3.png" alt="Info">
      </div>
    </li>
  </ul>
  <div class="control-box">
    <button class="btn"><img src="partner.svg" alt="Partner">Стать партнером</button>
  </div>
`;

main.append(sectionMoney);
document.body.append(main);
