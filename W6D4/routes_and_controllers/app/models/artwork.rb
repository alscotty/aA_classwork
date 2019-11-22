class Artwork < ApplicationRecord
  validates :title, :artist_id, presence: true
  validates :title, uniqueness: {
    scope: :artist_id,
    message: "Artist cannot have more than one of the same title."
  }

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

  has_many :artwork_shares,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :artwork_shares,
    source: :viewer

  has_many :comments,
    foreign_key: :artwork_id,
    class_name: :Comment,
    dependent: :destroy

    has_many :likes, as: :likable,
    foreign_key: :likable_id,
    class_name: :Like,
    dependent: :destroy

  has_many :favorites, as: :favoritable,
  foreign_key: :favoritable_id,
  class_name: :Favorite,
  dependent: :destroy


has_many :artwork_collections,
foreign_key: :artwork_id,
class_name: :ArtworkCollection

has_many :collections,
through: :artwork_collections,
source: :collection

end
