Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
  resources :users, only: [:create, :show] 
  resources :notebooks, only: [:create, :index, :show, :update, :destroy] do 
    resources :notes, only: [:index]
  end 
  resources :notes, only: [:create, :index, :show, :update, :destroy]
  resource :sessions, only: [:create, :destroy]
  end 
end
