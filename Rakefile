require 'rspec/core/rake_task'
require 'middleman-gh-pages'

RSpec::Core::RakeTask.new(:spec)

task :default => :spec

ENV["BRANCH_NAME"] = "master"
ENV["ALLOW_DIRTY"] = "true"
