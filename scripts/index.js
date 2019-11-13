
  document.addEventListener('DOMContentLoaded', function() {
    
    /**Este codigo se encarga de controlar la animacion de sidenav*/
    const elems = document.querySelectorAll('.sidenav');
    /**Si los scripts de materialize no se encientra iniciados
     * No se podra hacaer referencia a "M" dado que no estara 
     * instanciado.
     */
    const instances = M.Sidenav.init(elems);

    
  });