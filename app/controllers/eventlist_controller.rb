class EventlistController < ApplicationController
  protect_from_forgery with: :null_session	

  def index
  	render json: Eventlist.all
  end

  def show
  	render json: Eventlist.find(params[:id])
  end

  def destroy 
  	@entry = Eventlist.find(params[:id])
  	@entry.destroy
  	render json: {success:'destroyed'}
  end

  def create
  	@event = Eventlist.create(params.require(:eventlist).permit(:name))
  	render json: @event
  end

  def update 
  	@event = Eventlist.update(params[:name])		
  	render json: @event
  end
end
