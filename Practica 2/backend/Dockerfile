#Obtenemos la imagen de node necesaria para el servidor
FROM node:latest

#Creamos el entorno de trabajo
WORKDIR /src/app

#Copiamos el archivo de dependencias y las instalamos
COPY package*.json /src/app/
RUN npm install

#Copiamos los archivos descargados en la carpeta de trabajo
COPY . /src/app/

#Exponemos el servicio en el puerto 3000 y ejecutamos el archivo
EXPOSE 3000
CMD ["node", "index.js"]
