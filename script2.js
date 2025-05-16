        // Add event listeners for button interactions
        document.querySelector('.btn-primary').addEventListener('click', function() {
            alert('Loading more reviews...');
            // Here you would typically fetch more reviews from a server
        });

        // Add hover animations for profile images
        const profileImages = document.querySelectorAll('./images/meetOurTeam/meet1.jpg');
        profileImages.forEach(img => {
            img.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            img.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Add hover effect for testimonial cards
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach(card => {
            card.addEventListener('mouseover', function() {
                this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            });
            
            card.addEventListener('mouseout', function() {
                this.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            });
        });