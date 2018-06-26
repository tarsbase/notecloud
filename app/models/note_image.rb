class NoteImage < ApplicationRecord
  validates :url, presence: true

  belongs_to :note

end
