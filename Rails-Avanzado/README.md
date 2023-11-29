# Preguntas - RailsAvanzado

- Extienda el código del controlador del código siguiente dado con los métodos edit y update para las críticas. Usa un filtro de controlador para asegurarte de que un usuario sólo puede editar o actualizar sus propias críticas. Revisa el código dado en la evaluación y actualiza tus repositorios de actividades (no se admite nada nuevo aquí). Debes mostrar los resultados.

Agregamos métodos edit y update a `reviews_controller.rb`.

```ruby
def edit
end

def update
  @movie = Movie.find(params[:movie_id])
  @review = @movie.reviews.find(params[:id])
  potatoes_value_update = params[:review][:potatoes]
  @review.update(:potatoes => potatoes_value_update)
  redirect_to movie_path(@movie)
end
```
Esto actualizará el contenido de la critica para una pelicula dada. Sin embargo faltaria que solo el usuario autorizado es decir el creador de la critica sea el unico que pueda editarlo. Para ello se definen metodos.

```ruby
def set_review
  @review = Review.find(params[:id])
end

# Verifica que el usuario que ingresa a modificar sea el mismo que creo la critica
def user_is_current
  unless @review.moviegoer == @current_user
    flash[:warning] = 'You are not authorized to edit this review.'
    redirect_to movie_path(@movie)
  end
end
```
El metodo `set_review` verifica que la critica exista, y el metodo `user_is_current` verifica que el usuario vinculado a esa critica sea el mismo que el usuario actual, sino lo es retorna un mensaje de precaucion.

```ruby
before_action :user_is_current, :only => [:edit,:update]
```
Antes de ejecutar los metodos `edit` o `update` debe de cumplir el método `user_is_current`.

Ademas agregamos vistas para `index` y `edit` en `app/views/reviews`.

```ruby
%h1 New Review for #{@movie.title}

= form_tag movie_reviews_path(@movie) do
  %label How many potatoes:
  = select_tag 'review[potatoes]', options_for_select(1..5)
  = submit_tag 'Create Review'
```

```ruby
%h1 New Edit for #{@movie.title}

= form_for [@movie,@review] do |f|
  %label How many potatoes:
  = f.select :potatoes, options_for_select(1..5)
  = f.submit 'Update Review'
```

