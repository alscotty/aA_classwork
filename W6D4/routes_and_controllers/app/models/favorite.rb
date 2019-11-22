class Favorite < ApplicationRecord
  validates :user_id, :favoritable_id, :favoritable_type, presence: true
  validates :user_id, uniqueness: {
    scope: [:favoritable_id, :favoritable_type],
    message: "You've already favorited this Artwork"
  }

belongs_to :user,
foreign_key: :user_id,
class_name: :User

belongs_to :favoritable, polymorphic: true,
 foreign_key: :favoritable_id


end
