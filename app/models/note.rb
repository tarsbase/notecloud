# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  shortcut    :boolean
#

class Note < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates :title, presence: true

  belongs_to :notebook
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :note_images

  def created 
    time_ago_in_words(self.created_at).upcase
  end 
end
