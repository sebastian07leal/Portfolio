
  document.addEventListener('DOMContentLoaded', function() {
    
    const elems = document.querySelectorAll('.sidenav');
    const img = document.querySelectorAll('.materialboxed');

    const instances = M.Sidenav.init(elems);
    const inst = M.Materialbox.init(img);


    
  });