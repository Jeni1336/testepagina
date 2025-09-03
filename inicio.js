
    document.addEventListener("DOMContentLoaded", () => {   
      const menuToggle = document.querySelector(".menu-toggle");
      const menu = document.querySelector(".menu");
      menuToggle.addEventListener("click", () => menu.classList.toggle("active"));

   
      const slides = document.querySelectorAll('.slide');
      let current = 0;

      function showSlide(index){
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
      }

      document.querySelector('.next').addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });

      document.querySelector('.prev').addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });

      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 4000);
    });
