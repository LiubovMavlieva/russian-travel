const engBtn = document.querySelector('.header__link_en');
const ruBtn = document.querySelector('.header__link_ru')
const enSelected = document.querySelectorAll('.english')
const ruSelected = document.querySelectorAll('.russian')

engBtn.addEventListener('click', () => {
  engBtn.classList.add('header__link_selected')
  ruBtn.classList.remove('header__link_selected')
  enSelected.forEach((en) => {
    en.classList.add('english_active')
  })
  ruSelected.forEach((ru) => {
    ru.classList.remove('russian_active')
  })
})

ruBtn.addEventListener('click', () => {
  ruBtn.classList.add('header__link_selected')
  engBtn.classList.remove('header__link_selected')
  enSelected.forEach((en) => {
    en.classList.remove('english_active')
  })
  ruSelected.forEach((ru) => {
    ru.classList.add('russian_active')
  })
})