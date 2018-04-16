require 'rails_helper'

RSpec.describe Notebook, type: :model do

  it 'is valid when required attributes are present' do 
    expect(FactoryBot.build(:notebook)).to be_valid
  end 

  context 'is invalid' do 

    specify 'when name is blank' do 
     expect(FactoryBot.build(:notebook, name: '')).not_to be_valid
    end 

    specify 'when user is blank' do 
     expect(FactoryBot.build(:notebook, user: nil)).not_to be_valid
    end 
  end   
end
