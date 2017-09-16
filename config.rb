require "lib/webpack_asset_helpers"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes
set :slim, { :pretty => true, :sort_attrs => false, :format => :html }

set :bind, '0.0.0.0'

helpers WebpackAssetHelper
