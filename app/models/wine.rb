class Wine < ApplicationRecord
  belongs_to :winery
  validates :name, :vintage, :description, :winery, presence: true
  validates :name, uniqueness: true
end
