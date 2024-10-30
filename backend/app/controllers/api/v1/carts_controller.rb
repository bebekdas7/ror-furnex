class Api::V1::CartsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :index, :show, :create, :destroy ]

  include Api::V1::ResponseHelper

  def index
    if params[:userId]
      cart = Cart.where(userId: params[:userId])
    else
      cart = Cart.all
    end
    success_response(cart)
  end

  def show
  end

  def create
    cart = Cart.new(cart_param)

    if cart.save
      success_response(cart, "Added to cart successfully")
    else
      unprocessable_entity_response("Failed to add to cart")
    end
  end

  def destroy
    cart = Cart.find_by(id: params[:id])
    cart.destroy
    success_response(cart, "Deleted successfully")
  rescue
    not_found_response("Product not found")
  end


  private

  def cart_param
    params.require(:cart).permit(:userId, :productId, :productName, :productDescription, :productPrice)
  end
end
