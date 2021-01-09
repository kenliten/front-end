;(function(){
    'use strict';

    const themeToggleButton = document.querySelector('#theme-toggle');
    const modalCloser = document.querySelector('.modal-closer');
    const modalOpener = document.querySelector('.modal-opener');
    
    function toggleTheme() {
        if (themeToggleButton.classList.contains('fa-toggle-on')) {
            themeToggleButton.classList.replace('fa-toggle-on', 'fa-toggle-off');
            document.querySelectorAll('.dark').forEach(el => el.classList.replace('dark', 'light'));
        } else { 
            themeToggleButton.classList.replace('fa-toggle-off', 'fa-toggle-on');
            document.querySelectorAll('.light').forEach(el => el.classList.replace('light', 'dark'));
        }
    }

    themeToggleButton.addEventListener('click', toggleTheme);

    modalCloser.addEventListener('click', function(e) {
        e.target.parentNode.parentNode.style.display = 'none';
    });

    modalOpener.addEventListener('click', function() {
        document.querySelector('.modal-container').style.display = 'block';
    })

    window.onload = function() {
        if (new Date().getHours() > 18) {
            toggleTheme();
        }

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        let day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
        document.querySelector('#reserve-date').max = `${year + 1}-${month}-${day}`;
        document.querySelector('#reserve-date').min = `${year}-${month}-${day}`;
        document.querySelector('#reserve-date').value = `${year}-${month}-${day}`;
    }

})();