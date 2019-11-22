class User < ApplicationRecord
  validates :username, presence:true, uniqueness:true

  has_many :artworks,
    foreign_key: :artist_id,
    class_name: :Artwork,
    dependent: :destroy

  has_many :artwork_shares,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare,
    dependent: :destroy


  has_many :shared_artworks,
    through: :artwork_shares,
    source: :artwork

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy

    has_many :favorites,
    foreign_key: :user_id,
    class_name: :Favorite,
    dependent: :destroy

    has_many :collections,
    foreign_key: :user_id,
    class_name: :Collection



    def self.find_by_query(query)
      self.where("username LIKE '%#{query}%'")
    end
end
