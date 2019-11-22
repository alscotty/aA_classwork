class CommentsController < ApplicationController

def create
comment=Comment.new(comment_params)
  if comment.save
    render json: comment
  else
    render json: comment.errors.full_messages, status: 422
  end
end

def destroy
  comment=Comment.find_by(id: params[:id])
  comment.destroy
  render json: comment
end

def index
  if params[:user_id]
    user=User.find_by(id: params[:user_id])
    comments=user.comments
  elsif params[:artwork_id]
    artwork=Artwork.find_by(id: params[:artwork_id])
    comments=artwork.comments
  end
  render json: comments
end


private
def comment_params
params.require(:comment).permit(:artwork_id,:author_id,:body)
end

end