IMAGE_NAME := trt-vps
CONTAINER_NAME := trt-vps
# Keep in sync with docker-compose.yml container_name

.PHONY: build up down restart logs shell clean env

# Build the Docker image
build:
	docker compose build

# Start the container
up:
	docker compose up -d

# Stop the container
down:
	docker compose down

# Restart the container
restart:
	docker compose restart

# Tail container logs
logs:
	docker compose logs -f

# Open a shell inside the running container
shell:
	docker exec -it $(CONTAINER_NAME) /bin/bash

# Remove containers, volumes, and images
clean:
	docker compose down -v --rmi local

# Create dev.env from the example if it doesn't exist
env:
	@test -f dev.env || cp dev.env.example dev.env && echo "Created dev.env from example"
