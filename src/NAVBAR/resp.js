document.addEventListener('DOMContentLoaded', function() {

    function extractIconAndTextOnMobile() {

        const screenWidth = window.innerWidth;
    
        const mobileScreenWidth = 768;
        const desktopScreenWidth = 900;
    
        const submenuItems = document.querySelectorAll('.submenu-item');
    
        submenuItems.forEach(function(item) {
            if (screenWidth < mobileScreenWidth) {
               
                const htmlContent = item.innerHTML;
                const tempElement = document.createElement('div');
                tempElement.innerHTML = htmlContent;
    
                const iconHTML = tempElement.firstChild.outerHTML;
                item.innerHTML = iconHTML;
            } else {
              
                if (screenWidth >= desktopScreenWidth) {
     
                    const storedTextContent = item.getAttribute('data-original-text');
                    if (storedTextContent) {
                        item.innerHTML = storedTextContent;
                        item.removeAttribute('data-original-text'); 
                    }
                } else {
      
                    const storedTextContent = item.getAttribute('data-original-text');
                    if (!storedTextContent) {
         
                        item.setAttribute('data-original-text', item.innerHTML);
                    }
                }
            }
        });
    }

    extractIconAndTextOnMobile();
    
    window.addEventListener('resize', extractIconAndTextOnMobile);
    
});
