require 'rails_helper'

RSpec.describe Api::Note, type: :model do

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should belong_to(:notebook) }
end
