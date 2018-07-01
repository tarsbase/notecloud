json.note_count @note_count
json.notes do
  @notes.each do |note|
    json.set! note.id do 
      json.partial! 'api/notes/note', note: note
    end 
  end 
end 