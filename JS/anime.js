anime({
  targets: '#front-cover',
  height: [
     { value: 620, duration: 1000, delay: 200, elasticity: 0, easing: 'easeInSine' },
     { value: 0, duration: 200, delay: 2000, elasticity: 0, easing: 'easeOutSine' },
   ],
});

anime({
  targets: '.black-cover',
  height: [
     { value: 620, duration: 0, delay: 500, elasticity: 0, easing: 'easeInSine' },
     { value: 0, duration: 200, delay: 2000, elasticity: 0, easing: 'easeOutSine' },
   ],
});

anime({
  targets: '.logo-front-cover',
  opacity: [
     { value: 1, duration: 500, delay: 1000, elasticity: 0, easing: 'easeInSine' },
     { value: 0, duration: 200, delay: 1000, elasticity: 0, easing: 'easeOutSine' },
   ],
});