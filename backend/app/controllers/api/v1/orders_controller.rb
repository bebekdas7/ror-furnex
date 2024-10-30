class Api::V1::OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :index, :show, :create ]

  include Api::V1::ResponseHelper

  def index
    if params[:userId]
      orders = Order.where(userId: params[:userId])
    else
      orders = Order.all
    end
    success_response(orders)
  end

  def show
  end

  def create
    order = Order.new(order_params)

    if order.save
      created_response(order)
    else
      unprocessable_entity_response("Failed to create order")
    end
  end

  private

  def order_params
    params.require(:order).permit(:userId, :productId, :buyerName, :buyerEmail, :buyerAddress)
  end
end
