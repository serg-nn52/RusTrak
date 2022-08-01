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
  autoplay: true,
  speed: 3000,
  mouseDrag: false,
  swipeToSlide: true,
  nav: false, //убираю точки
  controls: false,
  items: 1.2,
  center: true,
  loop: true,
  swipeAngle: false,
  speed: 400,
  responsive: {
    410: {
      items: 1.6,
      center: false,
      autoplay: false,
    },
    575: {
      items: 1,
      center: false,
      autoplay: false,
    },
  },
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
  pop_up_wrapper = document.querySelector(".pop-up-wrapper"),
  close = document.querySelector(".pop-up__close"),
  body = document.querySelector("body");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.className);
    if (btn.className !== "btn footer__btn") {
      pop_up_wrapper.classList.add("pop-up-wrapper_active");
      body.classList.add("active");
    }
  });
});

pop_up_wrapper.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    pop_up_wrapper.classList.remove("pop-up-wrapper_active");
    body.classList.remove("active");
  }
});

close.addEventListener("click", () => {
  pop_up_wrapper.classList.remove("pop-up-wrapper_active");
  body.classList.remove("active");
});
