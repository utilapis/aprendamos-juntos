# Aprendamos juntos: Rest API Python

### 1. Entorno de desarrollo o extensiones para Visual Studio Code
* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
* [AREPL for python](https://marketplace.visualstudio.com/items?itemName=almenon.arepl)

### 2. Debugger y testeo
```
> pip install pytest
- Habilitar pytest
```

### 3. Manejo de bibliotecas
```
# Instalar paquetes
> pip install <paquete>

# Desinstalar paquetes
> pip uninstall <paquete>

# Instalar paquetes en el archivo requirements.txt
> pip install -r requirements.txt

# Agregar al archivo requiremets todos los paquetes en el ambiente.
> pip freeze > requirements.txt
```

### 4. Ambientes virtuales
```
# Crear un ambiente virtual
> python -m venv utilapis_env

# Activar el ambiente virtual
> WINDOWS: utilapis_env\Scripts\activate.bat
> BASH: source utilapis_env/Scripts/activate

# Desactivar el ambiente virtual
> deactivate
```

### 5. Rest API con Python
Probamos algunos de los frameworks recomendados por esta [página](https://rapidapi.com/blog/best-python-api-frameworks/):
- Ver: example_flask.py
- Ver: example_tornado.py

### 6. Estructura de directiorios o generadores de código.