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
    @note = current_user.notes.find(params[:id]).includes(:notebook)

    if @note 
      render :show
    else 
      render json: ["This is not your note"], status: 404
    end 
  end 

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update_attributes(note_params)
      render :show
    else 
      render json: @note.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @note = current_user.notes.find(params[:id])
    @note.destroy!
    render :show
  end 

  private 

  def note_params
    params.require(:notes).premit(:title, :body, :notebook_id)
  end
end
