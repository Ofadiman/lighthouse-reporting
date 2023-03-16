now := `date +%s`

version:
	curl -u "admin:password" localhost:9001/version
	
build:
	docker buildx build --tag ofadiman/lhci-server:latest --progress plain --platform linux/amd64,linux/arm64/v8 --output type=registry .	
	
wizard:
	pnpm lhci wizard --basicAuth.username=admin --basicAuth.password=password
	
fake_git_commit_hash:
	@echo "Now is $(now)"
	@echo "$(now)" | sha1sum | cut -b -40
	