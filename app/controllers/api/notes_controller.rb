class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)

    if @note.save!
      render :show
    else 
      render json: @note.errors.full_messages, status: 422
    end 
  end 

  def index 
    @notes = current_user.notes
    render :index
  end 

  def show
    @note = current_user.notes.find(params[:id])

    if @note 
      render :show
    else 
      render json: ["This is not your note"], status: 404
    end 
  end 

  private 

  def note_params
    params.require(:notes).premit(:title, :body, :notebook_id)
  end
end
