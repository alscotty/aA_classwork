class ApplicationController < ActionController::Base

  helper_method :current_user, :login!,:logged_in?, :logout!

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user  #=> !(!(current_user))
  end

  def logout!
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
  end

  def require_current_user!
    redirect_to cats_url if !current_user.nil?
  end

end
