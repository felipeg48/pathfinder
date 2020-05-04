#!/bin/zsh

mvn clean compile package -pl pathfinder-ui
docker build -t quay.io/felipeg/pathfinder-ui -f UIDockerfile .
docker push quay.io/felipeg/pathfinder-ui
