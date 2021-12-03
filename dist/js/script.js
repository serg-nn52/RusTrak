const slider = tns({
    container: '.slider__inner',
    items: 1,
    autoplay: false,
    speed: 1000,
    mouseDrag: false,
    swipeToSlide: true,
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
//   slider.getInfo().index.onChange();
console.log(slider.getInfo().onChange);