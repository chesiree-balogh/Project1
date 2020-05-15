docker build -t Project1-image .

docker tag Project1-image registry.heroku.com/Project1/web


docker push registry.heroku.com/Project1/web

heroku container:release web -a Project1