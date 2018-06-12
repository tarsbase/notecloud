class Api::TaggingsController < ApplicationController
  def create
    name = params[:tag][:name]
    @tag = current_user.tags.find_by('lower(name) = ?', name.downcase)
    unless @tag
      
      @tag = Tag.new(tag_params)
      @tag.user_id = current_user.id 
      render json: @tag.errors.full_messages, status: 422 unless @tag.save!
    end 
    @note = Note.find(params[:note][:id])
    tagging = Tagging.new(tag_id: @tag.id, note_id: @note.id)
    render json: tagging.errors.full_messages, status: 422 unless tagging.save!
    render 'api/notes/show'
  end 

  private 

  def tagging_params
    params.require(:tagging).permit(:note_id, :tag_id)
  end 

  def tag_params
    params.require(:tag).permit(:name)
  end 
end
