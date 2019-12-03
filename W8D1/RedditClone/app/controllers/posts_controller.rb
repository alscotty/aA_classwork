class PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_id = params[:sub_id]
    if @post.save
      redirect_to sub_url(@post.sub_id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
     if is_author?(@post)
      render :edit
     else
      flash[:errors]=['U r not author!!']
      redirect_to post_url(@post)
     end
  end

  def update
      @post = Post.find(params[:id])
      if is_author?(@post)
          if @post.update(post_params)
            redirect_to sub_url(@post.sub_id)
          else
            flash.now[:errors] = @post.errors.full_messages
            render :edit
          end
      else
      flash[:errors]=['U r not author!!']
      redirect_to post_url(@post)
      end
  end


  def show
    @post = Post.find(params[:id])
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to sub_url(post.sub_id)
  end

  def post_params
    params.require(:post).permit(:title, :url, :content, :sub_ids)
  end
end
