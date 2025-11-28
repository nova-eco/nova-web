#####################################################################
#                                                                   #
# DOCKERFILE                                                        #
# ----------                                                        #
#                                                                   #
# Purpose: Docker def for ecodev-fe-web.                            #
#                                                                   #
# Author:  ecodev admin <admin@ecodev.eco>                          #
#                                                                   #
# Date:    June 26th 2025                                           #
#                                                                   #
#####################################################################

#####################################################################
#                                                                   #
# EXAMPLES                                                          #
# --------                                                          #
#                                                                   #
# 1. pnpm start (run from the root of the current workspace)        #
#                                                                   #
#          Creates ./deps and builds ./dist                         #
#          Then triggers pnpm docker:start                          #
#                                                                   #
# 2. pnpm docker:start                                              #
#                                                                   #
#          Copies ./deps, ./dist, .env and ./server                 #
#          into the container. Then runs node ./server/index.mjs    #
#                                                                   #
# 3. pnpm docker:stop                                               #
#                                                                   #
#          Stop and delete container, along                         #
#          with the associated image.                               #
#                                                                   #
#####################################################################

FROM node:20.0.0
WORKDIR /var/www/ecodev/web

COPY ./.env ./.env
COPY ./deps/node_modules ./node_modules
COPY ./dist ./dist
COPY ./server ./server

CMD [ "node", "./server/index.mjs"]
