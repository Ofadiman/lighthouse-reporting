# Lighthouse reporting

The project shows how to use [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) tool to run lighthouse tests on a CI/CD server and collect application performance reports.

The lighthouse-ci server has been deployed on an [orange pi 5](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-5.html) running in my home network.

### Building docker image for arm64/v8

There already is a [lighthouse-ci server](https://hub.docker.com/r/patrickhulce/lhci-server/) docker image available for use. The problem with this image is that it only supports `linux/amd64` CPU architecture, so it cannot run on orange pi 5 which requires `linux/arm64/v8` architecture. For this reason I built my own version of lighthouse-ci server using [@lhci/server](https://www.npmjs.com/package/@lhci/server) library and [buildx](https://docs.docker.com/engine/reference/commandline/buildx/) tool.

### Securely exposing orange pi 5 server to the internet

I used [cloudflare tunnel](https://www.cloudflare.com/products/tunnel/) to securely expose my orange pi server to the internet. It allows to configure custom domains (e.g. `lhci.ofadiman.dev`) and redirect all the traffic to a server which is connected to cloudflare via tunnel (i.e. orange pi server).

### Continuous integration

Continuous integration is configured, so that every time a push to `main` branch happens 3 main actions are executed:

1. `lhci collect` - Runs lighthouse against selected URLs.
2. `lhci assert` - Compares lighthouse results against specified configuration.
3. `lhci upload` - Uploads lighthouse results to orange pi server.
