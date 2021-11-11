#Definicion de imagen a utilizar 
FROM tiangolo/node-frontend:10 as build-stage
 
#Creamos la carpeta de trabajo 
WORKDIR /app

#Copiamos el archivo de dependencias en la carpeta de trabajo 
COPY package*.json /app/

#Instalamos las dependencias necesarias. 
RUN npm install

#Copiamos el resto de archivos instalados
COPY ./ /app/

#Configuramos el build para producción y lo generamos
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

#Instalamos el servidor de producción 
FROM nginx:latest
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

#Exponemos el servicio en el puerto 80
EXPOSE 80