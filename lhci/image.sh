#!/usr/bin/env zsh

docker buildx build --tag ofadiman/lhci-server:latest --progress plain --platform linux/amd64,linux/arm64/v8 --output type=registry .