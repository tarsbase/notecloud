json.tag_count @tag_count
json.tags do 
  @tags.each do |tag|
    json.set! tag.id do 
      json.partial! 'api/tags/tag', tag: tag
    end 
  end 
end 
