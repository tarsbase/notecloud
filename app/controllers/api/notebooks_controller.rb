class Api::NotebooksController < ApplicationController
  def create
    
  end

  def show 

  end 

  def index 

  end 

  def destroy

  end 

  private 

  def notebook_params 
    params.require(:notebook).permit(:name)
  end 
end
