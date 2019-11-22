class FavoritesController < ApplicationController

  def index
    if params[:comment_id]
      comment = Comment.find_by(id: params[:comment_id])
      favorites = comment.favorites
    elsif params[:artwork_id]
      artwork = Artwork.find_by(id: params[:artwork_id])
      favorites = artwork.favorites
    end
    render json: favorites
  end

  def create
    p favorite_params
    favorite = Favorite.new(favorite_params)
    if favorite.save
      render json: favorite
    else
      render json: favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    favorite = Favorite.find_by(id: params[:id])
    favorite.destroy
    render json: favorite
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :favoritable_id, :favoritable_type)
  end

end