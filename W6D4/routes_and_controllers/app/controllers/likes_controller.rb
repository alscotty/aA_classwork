class LikesController < ApplicationController

  def index
    if params[:artwork_id]
      artwork=Artwork.find_by(id: vparams[:artwork_id])
      likes=artwork.likes
    elsif params[:comment_id]
      comment=Comment.find_by(id: params[:comment_id])
      likes=comment.likes
    end
    render json: likes
  end

  def create
    like = Like.new(like_params)
    if like.save
      render json: like
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def destroy
    like = Like.find_by(id: params[:id])
    like.destroy
    render json: like
  end

  private
  def like_params
    params.require(:like).permit(:likable_id,:likable_type,:user_id)
  end


end