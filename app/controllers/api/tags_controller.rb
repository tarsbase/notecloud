class Api::TagsController < ApplicationController
  before_action :require_login

  def index
    @tags = current_user.tags
    render :index
  end

  def show
    @tag = current_user.tags.find(params[:id])
    
    if @tag 
      render :show
    else 
      render json: ["Tag does not exist"], status: 404
    end 
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id

    if @tag.save! 
      render :show
    else 
      render json: @tag.errors.full_messages, status: 422
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
    @tag = current_user.notes.find(params[:id])

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
