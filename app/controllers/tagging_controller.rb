class TaggingController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    
    unless @tagging.save
      render json: @tagging.errors.full_messages, status: 422
    end 
  end 

  private 

  def tagging_params
    params.require(:tagging).permit(:note_id, :tag_id)
  end 
end
