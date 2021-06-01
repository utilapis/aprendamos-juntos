window.onload = async() => {
    productos = await (await fetch('http://127.0.0.1:5000/productos')).json()
    console.log(productos);
}