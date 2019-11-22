Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :users, except: [:new, :edit] do
  resources :artworks, only: [:index]
  resources :comments, only: [:index]
  resources :collections, only: [:index]

end

resources :comments, only: [:create,:destroy] do
  resources :favorites, only: [:index]
  resources :likes, only: [:index]
end

resources :likes, only: [:create,:destroy]

resources :favorites, only: [:create,:destroy]


resources :artworks, except: [:new, :edit,:index] do
  resources :comments, only: [:index]
  resources :favorites, only: [:index]
  resources :likes, only: [:index]
  resources :collections, only: [:index]
  resources :artwork_collections, only: [:index]
end

resources :artwork_collections, only: [:destroy, :create]
resources :collections, only: [:destroy, :create, :update] do
  resources :artwork_collections, only: [:index]

end

# get '/users', to: 'users#index', as: 'users'
# post '/users', to: 'users#create'
# get '/users/new', to: 'users#new', as: 'new_user'
# get '/users/edit', to: 'users#edit', as: 'edit_user'
# get '/users/:id', to: 'users#show', as: 'user'
# patch '/users/:id', to: 'users#update' 
# put '/users/:id', to: 'users#update' 
# delete '/users/:id', to: 'users#destroy'


end
