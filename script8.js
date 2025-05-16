
        // Add any JavaScript functionality here
        document.addEventListener('DOMContentLoaded', function() {
            const registerButton = document.querySelector('.btn-primary2');
            const supportButton = document.querySelector('.btn-primary3');
            
            registerButton.addEventListener('click', function() {
                alert('Registration process initiated!');
                // You can replace this with actual registration logic
            });
            
            supportButton.addEventListener('click', function() {
                alert('Help & Support requested!');
                // You can replace this with actual support logic
            });
        });
    