# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#  password_digest :string           not null
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end 

  def password=(password)
    @password = password
    self.password_digest = Bcrypt::Password.create(password)
  end

  def is_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def create_session_token
    session_token = SecureRandom.urlsafe_base64(16)
    session = Session.new(session_token: session_token, user_id: self.id)
    session.save!
    session_token
  end 

end
