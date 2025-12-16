# Base build stage
FROM node:22-alpine AS base
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# ---------- Frontend Stage ----------
FROM base AS frontend
RUN npm run build

FROM nginx:alpine AS nginx
COPY --from=frontend /app/packages/frontend/dist /usr/share/nginx/html
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ---------- Backend Stage ----------
FROM base AS backend
RUN rm -rf packages/frontend && rm -rf node_modules && \
    npm install --workspace=packages/backend --omit=dev --prefer-offline --no-audit
EXPOSE 4000
USER node
CMD ["npm", "start"]