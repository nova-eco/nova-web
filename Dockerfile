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

FROM node:22 AS builder
ARG NOVA_WEB_API_HOST
ARG NOVA_WEB_API_PORT
ARG NOVA_WEB_API_PROTOCOL
ARG NOVA_WEB_AUTHOR
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

FROM node:22 AS production
ARG NOVA_WEB_API_HOST
ARG NOVA_WEB_API_PORT
ARG NOVA_WEB_API_PROTOCOL
ARG NOVA_WEB_AUTHOR
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

RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE ${NOVA_API_PORT}
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://localhost:${NOVA_WEB_PORT}/healthcheck', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "dist/index.js"]
