json.partial! "guest", guest: @guest
json.gifts @guest.gifts do |gift|
  json.title gift.title
  json.description gift.description
end