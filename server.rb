require 'sinatra'
require_relative './javascript/rock_paper_scissors.erb'
require 'sinatra/partial'
set :partial_template_engine, :erb
require 'rack-flash'
use Rack::Flash

  get '/' do
    erb :rock_paper_scissors
  end


