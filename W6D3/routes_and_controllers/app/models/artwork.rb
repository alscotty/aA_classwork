class Artwork < ApplicationRecord
  validates :title, uniqueness: {scope: :artist_id,
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

end
