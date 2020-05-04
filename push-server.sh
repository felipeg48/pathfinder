#!/bin/zsh

mvn clean compile package -pl pathfinder-ui
docker build -t quay.io/felipeg/pathfinder-server -f ServerDockerfile .
docker push quay.io/felipeg/pathfinder-server
