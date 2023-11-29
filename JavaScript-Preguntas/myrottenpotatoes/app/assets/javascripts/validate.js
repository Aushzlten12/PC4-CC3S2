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
