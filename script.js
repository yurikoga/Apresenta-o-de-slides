const card = document.querySelector('.vogue-container');
const char = document.querySelector('.character-img');

card.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  
  // Faz o personagem seguir sutilmente o mouse
  char.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px) scale(1.05)`;
});

// Reseta quando o mouse sai
card.addEventListener('mouseleave', () => {
  char.style.transform = `translateX(0px) translateY(0px) scale(1)`;
});
