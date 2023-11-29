class ReviewsController < ApplicationController
  before_action :has_moviegoer_and_movie, :only => [:new, :create]
  before_action :set_review, :only => [:edit, :update]
  before_action :user_is_current, :only => [:edit,:update]
  protected
  def has_moviegoer_and_movie
    unless @current_user
      flash[:warning] = 'You must be logged in to create a review.'
      redirect_to login_path
    end
    unless (@movie = Movie.where(:id => params[:movie_id]))
      flash[:warning] = 'Review must be for an existing movie.'
      redirect_to movies_path
    end
  end
  public
  def new
    @review = @movie.reviews.build
  end

  def create
    # since moviegoer_id is a protected attribute that won't get
    # assigned by the mass-assignment from params[:review], we set it
    # by using the << method on the association.  We could also
    # set it manually with review.moviegoer = @current_user.
    @current_user.reviews << @movie.reviews.build(params[:review])
    redirect_to movie_path(@movie)
  end
  
  def edit
  end

  def update 
    @movie = Movie.find(params[:movie_id])
    @review = @movie.reviews.find(params[:id])
    potatoes_value_update = params[:review][:potatoes]
    @review.update(:potatoes => potatoes_value_update)
    redirect_to movie_path(@movie)
  end

  private 
  # Verifica que la critica exista

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

end