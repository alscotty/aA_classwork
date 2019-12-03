class SubsController < ApplicationController
  before_action :require_logged_in
# , only: [:edit]

  def new
    @sub=Sub.new
  end

  def create
    @sub=Sub.new(sub_params)
    @sub.moderator_id=current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors]=@sub.errors.full_messages
      render :new
    end
  end

  def index
    @subs=Sub.all
  end

  def show
    @sub=Sub.find(params[:id])
  end

  # def is_moderator?
  #   current_user.id==self.moderator_id
  # end

  def edit
    @sub=current_user.subs.find(params[:id])
    if is_moderator?(@sub)
    render :edit
    else
      flash[:errors]=['U r not moderator!!']
    redirect_to sub_url(@sub)
    end
  end

def update
  @sub=current_user.subs.find(params[:id])
  if @sub.update(sub_params)
    redirect_to sub_url(@sub)
  else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
  end
end

def sub_params
params.require(:sub).permit(:title,:description)
end

end
