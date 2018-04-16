require 'rails_helper'

RSpec.describe Api::Note, type: :model do
  
  it 'is valid when required attributes are present' do 
    expect(FactoryBot.build(:note)).to be_valid
  end 

end
