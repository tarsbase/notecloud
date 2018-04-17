require 'rails_helper'

RSpec.describe User, type: :model do

  subject { FactoryBot.build(:user) }
  it {should validate_uniqueness_of(:username)}

  it { should validate_presence_of(:username) }
  it { should allow_value(nil).for(:password) }
  it { should_not allow_value("").for(:password) }
  it { should validate_presence_of(:password_digest) }
  it { should have_many(:sessions) }  
  it { should have_many(:notebooks) }  
  it { should have_many(:notes) }  

end
