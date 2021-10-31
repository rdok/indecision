export UID = $(id -u)
export GID = $(id -g)

start: install
	docker-compose up

install:
	docker-compose run --rm web yarn

shell:
	docker-compose run --rm web sh

build: install
	docker-compose run --rm web yarn build:prod

prettier:
	yarn prettier

prettier-fix:
	yarn prettier:fix
