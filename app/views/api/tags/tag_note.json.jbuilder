json.set! :tag do 
  json.partial! 'api/tags/tag', tag: @tag
end

json.set! :note do 
  json.partial! 'api/notes/note', note: @note
end 