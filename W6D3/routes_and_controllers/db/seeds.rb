# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
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