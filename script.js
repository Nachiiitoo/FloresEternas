function comprar(producto, precio) {
    const mensaje = `Hola Jessica! Quiero comprar:\n${producto} 💐\nPrecio: ${precio}`;
    const telefono = "59898154193";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
