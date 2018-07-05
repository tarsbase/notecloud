json.extract! note, :id, :title, :body, :created_at, :updated_at, :shortcut
json.last_updated note.last_update
json.notebook note.notebook
json.tags do 
  json.array! note.tags
end 