#Download Node Alpine image
FROM node:18 As build
 
#Setup the working directory
RUN mkdir app
WORKDIR app
 
#Copy package.json
COPY package.json package-lock.json ./
# Install npm deps
RUN npm install -g @angular/cli
RUN npm i leaflet@1.3.2 --save
RUN npm install @types/leaflet --save-dev
RUN npm install
# Copy directory files to container
COPY . .
# Command to serve Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
