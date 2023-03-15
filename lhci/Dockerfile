FROM node:18.15.0-bullseye-slim

RUN apt update && apt install -y dumb-init neovim
RUN npm install -g pnpm

USER node
WORKDIR /home/node/lhci/

COPY --chown=node:node . .
RUN pnpm install
RUN pnpm build

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "dist/main.js"]
