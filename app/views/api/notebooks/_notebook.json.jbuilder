json.extract! notebook, :id, :name
json.notes do 
  json.array! notebook.notes.ids
end 