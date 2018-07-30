# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Notebook.where.not(name: "My Notes").destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all


15.times do 
  alex_notebook = Notebook.new(
    name: Faker::StarWars.unique.character,
    user_id: User.find_by(username: 'alex').id
  )
  guest_notebook = Notebook.new(
    name: Faker::StarWars.unique.character,
    user_id: User.find_by(username: 'Guest').id
  )
  [alex_notebook, guest_notebook].each {|notebook| notebook.save!}
end 

15.times do 
  alex_notebook = Notebook.new(
    name: Faker::Simpsons.unique.character,
    user_id: User.find_by(username: 'alex').id
  )
  guest_notebook = Notebook.new(
    name: Faker::Simpsons.unique.character,
    user_id: User.find_by(username: 'Guest').id
  )
  [alex_notebook, guest_notebook].each {|notebook| notebook.save!}
end 

35.times do 
  alex_note = Note.new(
    title: Faker::StarWars.unique.planet,
    body: Faker::StarWars.quote,
    notebook_id: User.find_by(username: 'alex').notebooks.order("RANDOM()").first.id
  )

  guest_note = Note.new(
    title: Faker::StarTrek.unique.character,
    body: Faker::StarWars.quote,
    notebook_id: User.find_by(username: 'Guest').notebooks.order("RANDOM()").first.id
  )
  [alex_note, guest_note].each {|note| note.save!}
end 

35.times do 
  alex_note = Note.new(
    title: Faker::GameOfThrones.unique.character,
    body: Faker::RickAndMorty.quote,
    notebook_id: User.find_by(username: 'alex').notebooks.order("RANDOM()").first.id
  )
  guest_note = Note.new(
    title: Faker::RickAndMorty.unique.character,
    body: Faker::RickAndMorty.quote,
    notebook_id: User.find_by(username: 'Guest').notebooks.order("RANDOM()").first.id
  )
  [alex_note, guest_note].each {|note| note.save!}
end 

10.times do 
  alex_tag = Tag.new(
    name: Faker::Seinfeld.unique.character,
    user_id: User.find_by(username: 'alex').id
  )
  guest_tag = Tag.new(
    name: Faker::Seinfeld.unique.character,
    user_id: User.find_by(username: 'Guest').id
  )

  [alex_tag, guest_tag].each {|tag| tag.save! }
end 

10.times do 
  alex_tag = Tag.new(
    name: Faker::StarTrek.unique.specie,
    user_id: User.find_by(username: 'alex').id
  )
  guest_tag = Tag.new(
    name: Faker::StarWars.unique.specie,
    user_id: User.find_by(username: 'Guest').id
  )
  [alex_tag, guest_tag].each {|tag| tag.save! }
end 

User.find_by(username: 'alex').tags.each do |tag|
  tagging = Tagging.new(note_id: User.find_by(username: 'alex').notes.order('RANDOM()').limit(1).first.id, tag_id: tag.id)
  tagging.save!
end

User.find_by(username: 'Guest').tags.each do |tag|
  tagging = Tagging.new(note_id: User.find_by(username: 'Guest').notes.order('RANDOM()').limit(1).first.id, tag_id: tag.id)
  tagging.save!
end

