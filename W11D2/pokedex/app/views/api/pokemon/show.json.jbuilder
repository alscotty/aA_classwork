json.set! 'pokemon' do
  json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :moves, :item_ids
  json.image_url asset_path("pokemon_snaps/#{@poke.image_url}")
end

json.set! 'items' do
   @poke.items.each do |item|
    json.set! item.id do 
      json.extract! item, :id,:name,:pokemon_id, :price, :happiness
      json.image_url asset_path("/#{item.image_url}")
      end
   end
end
