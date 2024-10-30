Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :chairs, only: [ :index, :show, :create, :update, :destroy ]
      resources :users, only: [ :index, :show, :create, :update, :destroy ]
      post "login", to: "users#login"
      resources :orders, only: [ :index, :show, :create ]
      resources :carts, only: [ :index, :show, :create, :destroy ]
    end
  end
  get "up" => "rails/health#show", as: :rails_health_check

  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
