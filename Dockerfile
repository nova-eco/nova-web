#####################################################################
#                                                                   #
# DOCKERFILE                                                        #
# ----------                                                        #
#                                                                   #
# Purpose: Docker def for nova-web.                                 #
#                                                                   #
# Author:  nova admin <admin@nova.eco>                              #
#                                                                   #
# Date:    November 28th 2025                                       #
#                                                                   #
#####################################################################

#####################################################################
#                                                                   #
# STAGE 1: Build                                                    #
#                                                                   #
#####################################################################

FROM node:22-alpine AS builder
ARG NOVA_WEB_API_HOST
ARG NOVA_WEB_API_PORT
ARG NOVA_WEB_API_PROTOCOL
ARG NOVA_WEB_AUTHOR
ARG NOVA_WEB_HOST
ARG NOVA_WEB_NAME
ARG NOVA_WEB_PORT
WORKDIR /app
COPY ./ ./
RUN npm ci
RUN npm run build

#####################################################################
#                                                                   #
# STAGE 2: Production                                               #
#                                                                   #
#####################################################################

FROM node:22-alpine AS production
ARG NOVA_WEB_API_HOST
ARG NOVA_WEB_API_PORT
ARG NOVA_WEB_API_PROTOCOL
ARG NOVA_WEB_AUTHOR
ARG NOVA_WEB_HOST
ARG NOVA_WEB_NAME
ARG NOVA_WEB_PORT
ENV NOVA_WEB_NAME=${NOVA_WEB_NAME}
ENV NOVA_WEB_PORT=${NOVA_WEB_PORT}
LABEL authors=${NOVA_WEB_AUTHOR}
LABEL name=${NOVA_WEB_NAME}
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/server ./server

RUN addgroup --gid 1001 --system nodejs && adduser --system --uid 1001 --ingroup nodejs nodejs
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE ${NOVA_API_PORT}

CMD ["node", "server/index.mjs"]
