json.notebook_count @notebook_count
json.notebooks do 
  @notebooks.each do |notebook|
    json.set! notebook.id do 
      json.partial! 'api/notebooks/notebook', notebook: notebook
    end 
  end 
end 