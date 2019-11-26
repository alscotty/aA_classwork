class SessionsController < ApplicationController
  before_action :require_current_user!, only: [:create, :new]

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user[:username]],params[:user[:password]])
    if user
      session[:session_token]=user.reset_session_token!

      redirect_to cats_url
    else
      render :new
    end
  end

  def destroy
    if current_user
      logout!
    end
    render :new
  end


end
