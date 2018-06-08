# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true
  validates_uniqueness_of :name, scope: [:user_id]

  belongs_to :user
  has_many :taggings, dependent: :destroy
  has_many :notes, through: :taggings
end
