require 'rails_helper'

RSpec.describe User, type: :model do

  it 'is valid when required attributes are present' do 
    expect(FactoryBot.build(:user)).to be_valid
  end 

  
end
