class CollectionsController<ApplicationController

def index
  if params[:artwork_id]
    artwork=Artwork.find_by(id: params[:artwork_id])
    collections=artwork.collections
  elsif params[:user_id] 
    user=User.find_by(id: params[:user_id])
    collections=user.collections
  end
  render json: collections
end

def create
  collection=Collection.new(collection_params)
  if collection.save
    render json: collection
  else
    render json: collection.errors.full_messages, status:422
  end
end

def update
  collection=Collection.find_by(id: params[:id])
  if collection.update(collection_params)
      render json: collection
  else
    render json: collection.errors.full_messages, status:422
  end
end

def destroy
  collection = Collection.find_by(id: params[:id])
  collection.destroy
  render json: collection
end

private
def collection_params
  params.require(:collection).permit(:name,:user_id)
end



end