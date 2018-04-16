require 'rails_helper'

RSpec.describe User, type: :model do

  it 'is valid when required attributes are present' do 
    expect(FactoryBot.build(:user)).to be_valid
  end 

  context 'is invalid' do
    specify 'when username is blank' do 
      expect(FactoryBot.build(:user, username: '')).not_to be_valid
    end
    
    specify 'when password is blank' do 
      expect(FactoryBot.build(:user, password: '')).not_to be_valid
    end 
    
    specify 'when password is less than 6 characters' do 
      expect(FactoryBot.build(:user, password: '12345')).not_to be_valid
    end 
  end 
end
