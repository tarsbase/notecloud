json.extract! notebook, :id, :name, :updated_at
json.notes do 
  json.array! notebook.notes.ids
end 