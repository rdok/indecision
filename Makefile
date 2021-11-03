export UID = $(id -u)
export GID = $(id -g)

check: prettier

start: install
	docker-compose up

install:
	docker-compose run --rm web yarn

shell:
	docker-compose run --rm web sh

build: install
	docker-compose run --rm web yarn build:prod

prettier: install
	docker-compose run --rm web yarn prettier

prettier-fix:
	docker-compose run --rm web yarn prettier:fix
