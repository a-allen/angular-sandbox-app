class AddOutdatedToEvents < ActiveRecord::Migration
  def change
    add_column :eventlists, :outdated, :boolean
  end
end
