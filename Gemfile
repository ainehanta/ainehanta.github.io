# If you do not have OpenSSL installed, change
# the following line to use 'http://'
source 'https://rubygems.org'

# For faster file watcher updates on Windows:
gem 'wdm', '~> 0.1.0', platforms: [:mswin, :mingw]

# Windows does not come with time zone data
gem 'tzinfo-data', platforms: [:mswin, :mingw, :jruby]

# Middleman Gems
gem 'middleman', '~> 4.2'
gem 'middleman-minify-html'
gem 'middleman-gh-pages'
gem 'slim'

group :development do
  gem 'middleman-livereload', '~> 3.4'
end

group :test do
  gem 'rake', '~> 10.4'
  gem 'rspec', '~> 3.4'
  gem 'capybara', '~> 2.5'
end

gem 'pry-byebug'
