class Like < ApplicationRecord
validates :likable_id, :likable_type, :user_id, presence: true

validates :likable_id, uniqueness: {
  scope: [:likable_type, :user_id],
  message: "You cannot like the same thing more than once." 
}

belongs_to :likable, polymorphic: true,
 foreign_key: :likable_id


end
