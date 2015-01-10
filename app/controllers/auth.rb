get '/' do
  erb :welcome
end

get '/hello' do
  erb :hello
end

# get '/name' do
#   @name = params[:name]
#   make view file named 'name', pass in a symbol @name
# end

get '/login' do

end

get '/signup' do

end

get '/data' do
  erb :data
end


#  client = SODA::Client.new({:domain => "explore.data.gov", :app_token => "hnb8iYk1gGyTK5TCce4jWhtOw"})