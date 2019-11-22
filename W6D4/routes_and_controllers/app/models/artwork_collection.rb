class ArtworkCollection < ApplicationRecord
validates :artwork_id, :collection_id, presence:true
validates :artwork_id, uniqueness: {
  scope: :collection_id,
  message: 'U may not add same artwork to same collection twice!!'
}

belongs_to :artwork,
foreign_key: :artwork_id,
class_name: :Artwork

belongs_to :collection,
foreign_key: :collection_id,
class_name: :Collection


end
