class Api::TagsController < ApplicationController
  before_action :require_login

  def index
    if params[:search] 
      @tags = current_user.tags.where("lower(name) LIKE ?", "%#{params[:search].downcase}%").includes(:notes)
    else 
      @tags = current_user.tags.includes(:notes)
    end 
    render :index
  end

  def show
    @tag = current_user.tags.includes(:notes).find(params[:id])
    
    if @tag 
      render :show
    else 
      render json: ["Tag does not exist"], status: 404
    end 
  end

  def create
    name = params[:tag][:name]
    @tag = current_user.tags.find_by('lower(name) = ?', name.downcase)
    if  @tag
      render :show
    else 
      @tag = Tag.new(tag_params)  
      @tag.user_id = current_user.id
    

      if @tag.save! 
        render :show
      else 
        render json: @tag.errors.full_messages, status: 422
      end 
    end 
  end

  def update 
    @tag = current_user.tags.find(params[:id])

    if @tag 
      if @tag.update_attributes(tag_params)
        render :show
      else 
        render json: @tag.errors.full_messages, status: 422
      end 
    else 
      render json: ["Tag does not exist"], status: 404
    end 
  end 

  def destroy
    @tag = current_user.tags.find(params[:id])

    if @tag 
      @tag.destroy! 
      render :show
    else 
      render json: ["Tag does not exist"], status: 404
    end 
  end

  private 

  def tag_params
    params.require(:tag).permit(:name)
  end 

end
