# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Like.destroy_all
Favorite.destroy_all
ArtworkCollection.destroy_all
Collection.destroy_all

c = User.create(username: 'Leonardo')
c1 = User.create(username: 'Bob Ross')
c2 = User.create(username: 'Vincent van Gogh')
c3 = User.create(username: 'Grant Wood')
c4 = User.create(username: 'Michelangelo')

a1 = Artwork.create(title: "Mona", artist_id: c.id)
a2 = Artwork.create(title: "The Scream", artist_id: c1.id)
a3 = Artwork.create(title: "Starry Night", artist_id: c2.id)
a4 = Artwork.create(title: "American Gothic", artist_id: c3.id)
a5 = Artwork.create(title: "David", artist_id: c4.id)

ArtworkShare.create(artwork_id: a1.id, viewer_id: c1.id)
ArtworkShare.create(artwork_id: a2.id, viewer_id: c2.id)
ArtworkShare.create(artwork_id: a3.id, viewer_id: c3.id)
ArtworkShare.create(artwork_id: a4.id, viewer_id: c4.id)
ArtworkShare.create(artwork_id: a5.id, viewer_id: c.id)

co1 = Comment.create(author_id: c.id, artwork_id: a2.id, body: "fdsafdsafdsafdafdsafaa5")
co2 = Comment.create(author_id: c1.id, artwork_id: a3.id, body: "fdsafdsafdsafdafdsafaa4")
co3 = Comment.create(author_id: c2.id, artwork_id: a4.id, body: "fdsafdsafdsafdafdsafaa3")
co4 = Comment.create(author_id: c3.id, artwork_id: a5.id, body: "fdsafdsafdsafdafdsafaa2")
co5 = Comment.create(author_id: c4.id, artwork_id: a1.id, body: "fdsafdsafdsafdafdsafaa1")

Like.create(likable_id: a1.id, likable_type: 'Artwork', user_id: c.id)
Like.create(likable_id: a2.id, likable_type: 'Artwork', user_id: c1.id)
Like.create(likable_id: a3.id, likable_type: 'Artwork', user_id: c2.id)
Like.create(likable_id: a3.id, likable_type: 'Artwork', user_id: c3.id)
Like.create(likable_id: co1.id, likable_type: 'Comment', user_id: c.id)
Like.create(likable_id: co2.id, likable_type: 'Comment', user_id: c1.id)
Like.create(likable_id: co3.id, likable_type: 'Comment', user_id: c2.id)
Like.create(likable_id: co3.id, likable_type: 'Comment', user_id: c3.id)

Favorite.create(favoritable_id: a1.id, favoritable_type: 'Artwork', user_id: c.id)
Favorite.create(favoritable_id: a2.id, favoritable_type: 'Artwork', user_id: c1.id)
Favorite.create(favoritable_id: a3.id, favoritable_type: 'Artwork', user_id: c2.id)
Favorite.create(favoritable_id: a3.id, favoritable_type: 'Artwork', user_id: c3.id)
Favorite.create(favoritable_id: co1.id, favoritable_type: 'Comment', user_id: c.id)
Favorite.create(favoritable_id: co2.id, favoritable_type: 'Comment', user_id: c1.id)
Favorite.create(favoritable_id: co3.id, favoritable_type: 'Comment', user_id: c2.id)
Favorite.create(favoritable_id: co3.id, favoritable_type: 'Comment', user_id: c3.id)

col1=Collection.create(user_id: c1.id, name: Faker::Name.unique.name)
col2=Collection.create(user_id: c2.id, name: Faker::Name.unique.name)
col3=Collection.create(user_id: c3.id, name: Faker::Name.unique.name)
col4=Collection.create(user_id: c4.id, name: Faker::Name.unique.name)
col5=Collection.create(user_id: c.id, name: Faker::Name.unique.name)


ArtworkCollection.create(artwork_id: a1.id, collection_id:col2.id)
ArtworkCollection.create(artwork_id: a1.id, collection_id:col3.id)
ArtworkCollection.create(artwork_id: a1.id, collection_id:col4.id)
ArtworkCollection.create(artwork_id: a1.id, collection_id:col5.id)
ArtworkCollection.create(artwork_id: a1.id, collection_id:col1.id)
ArtworkCollection.create(artwork_id: a2.id, collection_id:col1.id)
ArtworkCollection.create(artwork_id: a3.id, collection_id:col1.id)
ArtworkCollection.create(artwork_id: a4.id, collection_id:col1.id)
ArtworkCollection.create(artwork_id: a5.id, collection_id:col1.id)