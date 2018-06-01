document.addEventListener('DOMContentLoaded', function() {
  let wrapper = document.querySelector('.slider'),
      handle = wrapper.querySelector('.handle'),
      topLayer = wrapper.querySelector('.layer__top'),
      skew = 0,
      delta;

  if (wrapper.classList.contains('skewed')) {
    skew = 990;
  }

  wrapper.addEventListener('mousemove', function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width = e.clientX + skew + delta + 'px';
  })
});