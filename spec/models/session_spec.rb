# == Schema Information
#
# Table name: sessions
#
#  id            :integer          not null, primary key
#  session_token :string           not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Session, type: :model do

  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:user_id) }
  it { should belong_to(:user) }
end
