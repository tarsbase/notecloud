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

require 'test_helper'

class SessionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
