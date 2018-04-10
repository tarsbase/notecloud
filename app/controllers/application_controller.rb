class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login(user)
    @current_user = user
    session[:session_token] = user.create_session
  end 

  def current_user
    user_session = Session.find_by(session_token: session[:session_token])
    if user_session 
      @current_user ||= User.find(user_session.user_id)
    else 
      @current_user = nil
    end 
    @current_user
  end

  def logout
    user_session = Session.find_by(session_token: session[:session_token])
    user_session.destroy!
    session[:session_token] = nil
  end
  
  def logged_in?
    !!current_user
  end 
end
