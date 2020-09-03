export UID = $(id -u)
export GID = $(id -g)

start: install
	docker-compose up -d

install:
	docker-compose run --rm web yarn

sh:
	docker-compose run --rm web sh

build: install
	docker-compose run --rm web yarn build:prod
