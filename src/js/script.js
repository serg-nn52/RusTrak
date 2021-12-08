const slider = tns({
  container: ".slider__inner",
  items: 1,
  autoplay: true,
  speed: 1000,
  mouseDrag: false,
  swipeToSlide: true,
  controls: true,
  // responsive: {
  //   575: {
  //     controls: true //убираю стрелки навигации
  //   },
  //   320: {
  //     controls: false //убираю стрелки навигации
  //   }
  // }
});

const slider1 = tns({
  container: ".categories__slider",
  items: 1,
  autoplay: false,
  speed: 1000,
  mouseDrag: false,
  swipeToSlide: true,
  nav: false, //убираю точки
  controls: false,
  // responsive: {
  //   640: {
  //     edgePadding: 20,
  //     gutter: 20,
  //     items: 2
  //   },
  //   700: {
  //     gutter: 30
  //   },
  //   900: {
  //     items: 3
  //   }
  // }
});

let indexCurrent = 1; //начинаю счетчик страниц
let next = document.querySelector(".categories__btn_next"), //получаю кнопку вперед
  prev = document.querySelector(".categories__btn_prev"), //получаю кнопку назад
  page = document.querySelector(".categories__number"), // получаю элемент, куда выводить номер страницы
  slide = document.querySelector(".categories__slider"),
  active;

page.innerHTML = `1 / 3`; //вывод начального состояния, загрузка с 1 страницы

next.addEventListener("click", (e) => {
  //обработчик по клику
  e.preventDefault();
  slider1.goTo("next"); //связываю свои кнопки с кнопками слайдера
  indexCurrent += 1;
  if (indexCurrent === 4) indexCurrent = 1; //допускаем переключение слайдов по кругу
  page.innerHTML = `${indexCurrent} / 3`;
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  slider1.goTo("prev"); //связываю свои кнопки с кнопками слайдера
  indexCurrent -= 1;
  if (indexCurrent === 0) indexCurrent = 3;
  page.innerHTML = `${indexCurrent} / 3`;
});

slide.onclick = () => {
  setTimeout(() => {
    active = document.querySelectorAll(".tns-slide-active");
    console.log(active[1].id);
  }, 2000);
};

let btns = document.querySelectorAll(".btn"),
  pop_up = document.querySelector(".pop-up"),
  close = document.querySelector(".pop-up__close");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.className);
    if (btn.className !== "btn footer__btn") {
      pop_up.classList.add("pop-up_active");
    }
  });
});

close.addEventListener("click", () => {
  pop_up.classList.remove("pop-up_active");
});
