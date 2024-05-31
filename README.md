# COMPILING DOCKER COMPOSE CONTAINER
```
sudo docker-compose down
```

When you run docker-compose up --build, it rebuilds the image. However, if Docker caches the build context and doesn't notice the changes, you might need to clear the cache or force a rebuild.
```
sudo docker-compose build --no-cache
sudo docker-compose up
```
