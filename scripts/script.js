const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const closeMenuButton = document.querySelector('.close-mobile-menu');
      const navTop = document.querySelector('.nav-top');

      mobileMenuButton.addEventListener('click', () => {
        navTop.classList.add('active');
      });

      closeMenuButton.addEventListener('click', () =>{
        navTop.classList.remove('active')
      });
