require 'rails_helper'

RSpec.describe Notebook, type: :model do
  
  it { should validate_presence_of(:name) }
  it { should have_many(:notes) }
  it { should belong_to(:user) }

end
