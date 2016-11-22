class CreateWines < ActiveRecord::Migration[5.0]
  def change
    create_table :wines do |t|
      t.string :name
      t.integer :vintage
      t.text :description
      t.references :winery, foreign_key: true

      t.timestamps
    end
  end
end
