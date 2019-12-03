
class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def is_moderator?(sub)
    current_user.id==sub.moderator_id
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def is_author?(post)
    current_user.id==post.author_id
  end


  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
  end
end
