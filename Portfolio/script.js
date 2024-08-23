document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("animated-name");
    const colors = ['#4A90E2', '#50E3C2', '#9013FE', '#F5A623', '#D0021B', '#7ED321', '#F8E71C'];
    let currentIndex = 0;
  
    function changeColor() {
      // Uppdaterar färgen på namnet
      nameElement.style.color = colors[currentIndex];
  
      // Uppdaterar indexet, loopar tillbaka tills början om det behövs
      currentIndex = (currentIndex + 1) % colors.length;
  
      // Ställer in nästa färgbyte
      setTimeout(changeColor, 1500);
    }
  
    // Startar färgförändringsprocessen
    changeColor();
});
  
document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('jumpy-text');
    const textContent = text.textContent;
    text.innerHTML = '';
  
    // Slår in varje bokstav i ett spann och hanterar mellanslag
    for (let i = 0; i < textContent.length; i++) {
      const char = textContent[i];
      const span = document.createElement('span');
      
      // Om tecknet är ett mellanslag, läggs då till ett icke-brytande mellanslag
      span.textContent = char === ' ' ? '\u00A0' : char;
      text.appendChild(span);
    }
  
    const letters = text.querySelectorAll('span');
  
    function triggerAnimation() {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('jump');
        }, index * 100); // Förskjutning av animeringen för varje bokstav
  
        setTimeout(() => {
          letter.classList.remove('jump');
        }, 1000 + index * 100); // Animering av varje bokstav i olika steg
      });
    }
  
    // Startar animeringen var 5:e sekund
    setInterval(triggerAnimation, 5000);
  
    // Initial trigger
    triggerAnimation();
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    function handleScroll() {
      sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (sectionPosition < screenHeight - 100) {  // Justerar värdet för tidigare aktiveringar
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    }
  
    // Aktiverar funktionen handleScroll vid varje scrollning
    window.addEventListener('scroll', handleScroll);
  
    // Kontroll av om avsnittet redan visas vid sidladdning
    handleScroll();
});