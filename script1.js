 // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.navbar-menu').classList.toggle('active');
        });
        
        // Initialize Owl Carousel
        $(document).ready(function(){
            $(".services-carousel").owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: [
                    "<i class='fas fa-chevron-left'></i>",
                    "<i class='fas fa-chevron-right'></i>"
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    557: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    }
                }
            });
        });