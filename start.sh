#!/bin/bash
set -ex

git pull
docker compose -f docker-compose.prod.yml up -d --build
docker image prune -f