require 'rails_helper'

RSpec.describe Api::Note, type: :model do
  
  it 'is valid when required attributes are present' do 
    expect(FactoryBot.build(:note)).to be_valid
  end 

  context 'is invalid' do 
    specify 'when title is blank' do
      expect(FactoryBot.build(:note, title: '')).not_to be_valid
    end

    specify 'when body is blank' do
      expect(FactoryBot.build(:note, body: '')).not_to be_valid
    end 

    specify 'when notebook is blank' do 
      expect(FactoryBot.build(:note, notebook: nil)).not_to be_valid
    end 
  end 
end
