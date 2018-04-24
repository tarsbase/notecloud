# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text             not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates :title, :body, presence: true

  belongs_to :notebook

  def last_update 
    time_ago_in_words(self.updated_at)
  end 
end
