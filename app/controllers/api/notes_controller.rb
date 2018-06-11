class Api::NotesController < ApplicationController
  before_action :require_login

  def create
    @note = Note.new(note_params)
    
    if @note.save!
      if params[:note][:tags]
        tags = params[:note][:tags].to_unsafe_h
        tag_names = tags.values.map {|tag| tag[:name]}
        tag_names.each do |name|
          tag = current_user.tags.find_by('lower(name) = ?', name.downcase) 
            unless tag 
              tag = Tag.new(name: name)
              tag.user_id = current_user.id
              tag.save
            end 
          Tagging.create(note_id: @note.id, tag_id: tag.id)
        end 
      end 
      render :show
    else 
      render json: @note.errors.full_messages, status: 422
    end 
  end 

  def index 
    if params[:notebook_id] 
      @notes = current_user.notebooks.includes([:notes]).find(params[:notebook_id]).notes
    elsif params[:tag_id]
      @notes = current_user.tags.includes([:notes, :taggings]).find(params[:tag_id]).notes
    else 
      @notes = current_user.notes
    end 
    render :index
  end 

  def show
    @note = current_user.notes.includes(:notebook).find(params[:id])

    if @note 
      render :show
    else 
      render json: ["This is not your note"], status: 404
    end 
  end 

  def update
    @note = current_user.notes.find(params[:id])

    if @note 
      if @note.update_attributes(note_params)
        render :show
      else 
        render json: @note.errors.full_messages, status: 422
      end 
    else 
      render json: ["Note does not exist"], status: 404
    end 
  end 

  def destroy
    @note = current_user.notes.find(params[:id])

    if @note 
      @note.destroy!
      render :show
    else 
      render json: ["Note does not exist"], status: 404
    end 
  end 

  private 

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
