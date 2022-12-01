FROM nginx:alpine

COPY /dist/proyect-angular /usr/share/nginx/html

EXPOSE 80

# FROM node:latest as build

# WORKDIR /usr/src/app

# COPY package.json package-lock.json ./

# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/proyect-angular /usr/share/nginx/html