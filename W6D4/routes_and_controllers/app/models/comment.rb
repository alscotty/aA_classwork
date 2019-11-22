class Comment < ApplicationRecord
  validates :author_id, :artwork_id, :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: :Artwork

    has_many :likes, as: :likable,
     foreign_key: :likable_id,
    class_name: :Like,
    dependent: :destroy

    has_many :favorites, as: :favoritable,
     foreign_key: :favoritable_id,
    class_name: :Favorite,
    dependent: :destroy



  end
