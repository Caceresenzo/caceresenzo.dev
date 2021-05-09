#! /bin/sh

echo Reploying...

git pull

docker build -t caceresenzo-dev-nuxt .

docker rm -f caceresenzo-dev-nuxt
docker run \
  -d \
  --name caceresenzo-dev-nuxt \
  --restart unless-stopped \
  -p 8020:8080 \
  caceresenzo-dev-nuxt
