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

    function temadapagina(){

        const darkmode = localStorage.getItem('dark-mode') === 'true';
        document.body.classList.toggle('dark-mode', darkmode);
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
        const ischecked = this.checked;
        document.body.classList.toggle('dark-mode', ischecked);
        localStorage.setItem('dark-mode', ischecked);
    });

    temadapagina();
});
