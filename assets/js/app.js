function menu() {
    console.log('test');

    var menuBtn = document.getElementById('menuBtn');
    var sideNav = document.getElementById('sideNav');
    


    
  
        if (sideNav.style.right == '-250px') {
            sideNav.style.right = '0';
        }
        else {
            sideNav.style.right = '-250px';
        }
    
}