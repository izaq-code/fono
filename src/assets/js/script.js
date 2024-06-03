document.addEventListener('DOMContentLoaded', function() {

    function toggleSubMenu(submenuId, iconId, newIconClass) {
        const submenu = document.getElementById(submenuId);
        const icon = document.getElementById(iconId);

        submenu.classList.toggle('visible');

        if (submenu.classList.contains('visible')) {
            icon.className = '';
            icon.classList.add('bi', newIconClass);
        } else {
            icon.className = '';
            icon.classList.add('bi', 'bi-caret-up-fill');
        }
    }

    function temadapagina() {
        const darkmode = localStorage.getItem('dark-mode') === 'true';
        const lightmode = localStorage.getItem('light-mode') === 'true';
        
        if (darkmode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else if (lightmode) {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        checkbox.checked = darkmode; 
    }

    const menuHeader = document.getElementById('menuHeader');
    menuHeader.addEventListener('click', function() {
        toggleSubMenu('menu', 'menuIcon', 'bi-caret-down-fill');
    });

    const settingsHeader = document.getElementById('settingsHeader');
    settingsHeader.addEventListener('click', function() {
        toggleSubMenu('settings', 'settingsIcon', 'bi-caret-down-fill');
    });

    const checkbox = document.getElementById('inputto');

    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;

        if (isChecked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('dark-mode', true);
            localStorage.setItem('light-mode', false);
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', false);
            localStorage.setItem('light-mode', true);
        }
    });

    temadapagina();
});
