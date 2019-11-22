class ArtworkCollectionsController<ApplicationController
  def index
    if params[:collection_id]
      collection = Collection.find_by(id: params[:collection_id])
      artworks = collection.artworks
      render json: artworks
    elsif params[:artwork_id]
      artwork = Artwork.find_by(id: params[:artwork_id])
      collections = artwork.collections
      render json: collections

    end
  end

  def create
    artwork_collection = ArtworkCollection.new(artwork_collection_params)
    if artwork_collection.save
      render json: artwork_collection
    else
      render json: artwork_collection.errors.full_messages, status: 422
    end
  end
  
  def destroy
    artwork_collection = ArtworkCollection.find_by(id: params[:id])
    artwork_collection.destroy
    render json: artwork_collection
  end

  private
  def artwork_collection_params
    params.require(:artwork_collection).permit(:artwork_id, :collection_id)
  end
end