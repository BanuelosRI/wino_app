Rails.application.routes.draw do

  resources :wines

  root 'wineries#index'

  resources :wineries
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
