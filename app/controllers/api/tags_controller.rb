class Api::TagsController < ApplicationController
  before_action :require_login

  def index
    @tags = current_user.tags
    # debugger
    render :index
  end

  def show
    @tag = current_user.tags.find(params[:id]).includes(:notes)
    
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

  def tag_note 
    name = params[:tag][:name]
    @tag = current_user.tags.find_by('lower(name) = ?', name.downcase)
    unless @tag 
      @tag = Tag.new(tag_params)
      render json: @tag.errors.full_messages, status: 422 unless @tag.save!
    end 
    @note = params[:note]
    tagging = Tagging.new(tag_id: @tag.id, note_id: @note.id)
    render json: tagging.errors.full_messages, status: 422 unless tagging.save!
    render 'api/tags/tag_note'
  end 

  private 

  def tag_params
    params.require(:tag).permit(:name)
  end 
end
