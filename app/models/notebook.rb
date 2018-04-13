# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  validates :name, :user_id, presence: true

  has_many :notes
  belongs_to :user
end
