# Preguntas - Javascript

- Un inconveniente de la herencia de prototipos es que todos los atributos (propiedades) de los objetos son públicos. Sin embargo, podemos aprovechar las clausuras para obtener atributos privados. Crea un sencillo constructor para los objetos User que acepte un nombre de usuario y una contraseña, y proporcione un método checkPassword que indique si la contraseña proporcionada es correcta, pero que deniegue la inspección de la contraseña en sí. Esta expresión de “sólo métodos de acceso” se usa ampliamente en jQuery. Sugerencia:  El constructor debe devolver un objeto en el que una de sus propiedades es una función que aprovecha las clausuras de JavaScript para ‘recordar’ la contraseña proporcionada inicialmente al constructor. El objeto devuelto no debería tener ninguna propiedad que contenga la contraseña.


```javascript
let User = function (usuario, password) {
  this.usuario = usuario;
  this.password = password;
  this.checkPassword = function(password) {
    if (password.length === 0) {
      throw new Error("Invalid password")
    }
  } 
};

let user1 = new User("root", "root");
console.log(user1);

```

Un objeto contructor con user y password con un metodo para verificar si la contraseña es permitida.

- Extienda la función de validación en ActiveModel  para generar automáticamente código JavaScript que valide las entradas del formulario antes de que sea enviado. Por ejemplo, puesto que el modelo Movie de RottenPotatoes requiere que el título de cada película sea distinto de la cadena vacía, el código JavaScript deberías evitar que el formulario “Add New Movie” se enviara si no se cumplen los criterios de validación, mostrar un mensaje de ayuda al usuario, y resaltar el(los) campo(s) del formulario que ocasionaron los problemas de validación. Gestiona, al menos, las validaciones integradas, como que los títulos sean distintos de cadena vacía, que las longitudes máximas y mínima de la cadena de caracteres sean correctas, que los valores numéricos estén dentro de los límites de los rangos, y para puntos adicionales, realiza las validaciones basándose en expresiones regulares.

Cree un archivo en `assets/javascript` con el nombre de `validate.js`.

```javascript
var Validate = {
  setup: function () {
    let btnEnviar = $("#btn-enviar");
    $document.on("click", btnEnviar, this.validateForm);
  },
  validateForm: function () {
    let formTitle = $("#movie_title").val();
    if (formTitle.length <= 0) {
      $("<p></p>")
        .text("Debe ingresar un titulo valido")
        .appendTo(document.body);
      let formYear = $("#movie_release_date_1i").val();
      if (formYear < 1930) {
        $("<p></p>")
          .text("Debe ingresar una pelicula despues de 1930")
          .appendTo(document.body);
      }
    }
  },
};

$(Validate.setup)
```
Al momento de hacer click en el boton para guardar la nueva pelicula entonces se valida los campos de title y release date, verificando si title no es un espacio en blancoy si la fecha es menor a 1930.

- En el código utilizado en la sección de eventos y funciones callback, supongamos que no puedes modificar el código del servidor para añadir la clase CSS adult a las filas de la tabla movies. ¿Cómo identificaría las filas que están ocultas utilizando sólo código JavaScript del lado cliente?

