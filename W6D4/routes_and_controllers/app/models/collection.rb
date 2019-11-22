class Collection < ApplicationRecord
validates :artist_id,:name, presence:true

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

has_many :artwork_collections,
foreign_key: :collection_id,
class_name: :ArtworkCollection

has_many :artworks,
  through: :artwork_collections,
  source: :artwork

end
