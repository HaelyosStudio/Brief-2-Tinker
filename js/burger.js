const burgerChoices = document.querySelector('.navBurgerChoices');

let isBurgerHidden = true;

function burgerOpenClose() {
  if (isBurgerHidden) {
    burgerChoices.style.display = 'flex';
  } else {
    burgerChoices.style.display = 'none';
  }
  isBurgerHidden = !isBurgerHidden;
}

