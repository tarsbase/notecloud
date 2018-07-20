class Api::NotebooksController < ApplicationController
  before_action :require_login
  
  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id

    if @notebook.save! 
      render :show
    else 
      render json: @notebook.errors.full_messages, status: 422
    end 
  end

  def show 
    @notebook = current_user.notebooks.includes(:notes).find(params[:id])

    if @notebook 
      render :show
    else 
      render json: ["This notebook belongs to a different user"], status: 404
    end 
  end 

  def index 
    if params[:search]
      @notebooks = current_user.notebooks.where("lower(name) LIKE ?", "%#{params[:search].downcase}%").includes(:notes).page params[:page]  
      @notebook_count = current_user.notebooks.where("lower(name) LIKE ?", "%#{params[:search].downcase}%").count
    else 
      @notebooks = current_user.notebooks.includes(:notes).page params[:page]  
      @notebook_count = current_user.notebooks.count
    end 
    render :index
  end 

  def update 
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook.update_attributes(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    @notebook.destroy! 
    render :show
  end 

  private 

  def notebook_params 
    params.require(:notebook).permit(:name)
  end 
end
