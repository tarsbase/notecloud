json.extract! note, :id, :title, :body, :created_at, :updated_at, :shortcut
json.created note.created
json.notebook note.notebook
json.tags do 
  json.array! note.tags
end 