FactoryBot.define do 
  factory :user do 
    username "Vargas"
    password 'farface69'
  end 
end 

FactoryBot.define do 
  factory :notebook do 
    name "My Notes"
    user FactoryBot.build(:user)
  end 
end 

FactoryBot.define do 
  factory :note do 
    title 'Hello Wold'
    body 'This is a dummy note'
    notebook FactoryBot.build(:notebook)
  end 
end 