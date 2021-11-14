Rails.application.routes.draw do
  resources :posts
  post 'posts/attach', to: 'posts#attach'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
