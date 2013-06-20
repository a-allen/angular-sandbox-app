class CreateEventlists < ActiveRecord::Migration
  def change
    create_table :eventlists do |t|
      t.string :name

      t.timestamps
    end
  end
end
