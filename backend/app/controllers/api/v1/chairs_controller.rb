class Api::V1::ChairsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index, :show, :create, :update, :destroy]

  include Api::V1::ResponseHelper

  before_action :set_chair, only: [:show, :update, :destroy]

  def index
    chairs = Chair.all
    render json: chairs
  end

  def show
    if @chair
      success_response(@chair)
    else
      not_found_response("Chair not found")
    end
  end

  def create
    chair = Chair.new(req_params)

    if chair.save
      success_response(chair, "Chair created successfully")
    else
      unprocessable_entity_response("Couldn't create chair")
    end
  end

  def update
    if @chair.update(req_params)
      success_response(@chair, "Chair updated successfully")
    else
      not_found_response("Chair not found")
    end
  end

  def destroy
    if @chair.destroy
      success_response(@chair, "Deleted successfully")
    else
      not_found_response("Chair not found")
    end
  end

  private

  def set_chair
    @chair = Chair.find_by(id: params[:id])
    not_found_response("Chair not found") unless @chair
  end

  def req_params
    params.require(:chair).permit(:name, :brand, :description, :price)
  end
end
