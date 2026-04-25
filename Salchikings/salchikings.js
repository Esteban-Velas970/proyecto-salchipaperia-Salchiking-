function agregarAlCarrito(producto, precio) {
    let contador = document.getElementById("contador-" + producto);}
    if (!contador) return;{
    let cantidad = parseInt(contador.textContent)|| 0 ;
    cantidad++;
    contador.textContent = cantidad + 1;

    let total = document.getElementById("total");}




