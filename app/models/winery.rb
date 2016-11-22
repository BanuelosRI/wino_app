class Winery < ApplicationRecord
  has_many :wines
  validates :name, :location, :description, presence: true
end
