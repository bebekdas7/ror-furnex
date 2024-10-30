class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index, :show, :create, :update, :destroy, :login]
  before_action :set_user, only: [:show, :update, :destroy]

  include Api::V1::ResponseHelper

  def index
    users = User.all
    success_response(users)
  end

  def show
    success_response(@user)
  end

  def create
    user = User.new(
      name: params[:user][:name],
      email: params[:user][:email],
      password: params[:user][:password]
    )
    if user.save
      render json: user, status: :created
    else
      unprocessable_entity_response(user.errors.full_messages.join(", "))
    end
  end
  

  def update
    if @user.update(user_params)
      success_response(@user, "User updated successfully")
    else
      unprocessable_entity_response(@user.errors.full_messages)
    end
  end

  def destroy
    @user.destroy
    success_response(@user, "User deleted successfully")
  end

  def login
    user = User.find_by(email: user_params[:email])
    if user&.authenticate(user_params[:password])
      success_response(user, "Login successful")
    else
      unauthorized_response("Invalid email or password")
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    not_found_response("User not found")
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
