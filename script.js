
        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const backdrop = document.getElementById('backdrop');
        
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            backdrop.style.display = 'block';
            setTimeout(() => {
                backdrop.classList.add('active');
            }, 10);
        });
        
        function closeMenu() {
            mobileMenu.classList.remove('active');
            backdrop.classList.remove('active');
            setTimeout(() => {
                backdrop.style.display = 'none';
            }, 500);
        }
        
        closeMenuBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);
        
        // Flyout menus
        const flyoutContainers = document.querySelectorAll('.flyout-container');
        
        flyoutContainers.forEach(container => {
            const link = container.querySelector('.nav-link');
            const menu = container.querySelector('.flyout-menu');
            
            container.addEventListener('mouseenter', () => {
                menu.style.display = 'block';
                setTimeout(() => {
                    menu.style.opacity = '1';
                }, 10);
            });
            
            container.addEventListener('mouseleave', () => {
                menu.style.opacity = '0';
                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);
            });
        });
        
        // Fetch user data (example)
        function fetchUserData() {
            // This would normally be an API call
            return {
                name: 'John Doe',
                email: 'john@example.com'
            };
        }
        
        // Update user info in the header
        function updateUserInfo() {
            const userData = fetchUserData();
            const userNameElement = document.querySelector('.user-name');
            const userEmailElement = document.querySelector('.user-email');
            
            if (userData && userNameElement && userEmailElement) {
                userNameElement.textContent = userData.name;
                userEmailElement.textContent = userData.email;
            }
        }
        
        // Call this when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            updateUserInfo();
        });
    