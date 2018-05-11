json.extract! note, :id, :title, :body, :notebook_id, :created_at, :updated_at
json.last_updated note.last_update
json.notebook_name note.notebook.name
json.tags do 
  json.array! note.tags
end 