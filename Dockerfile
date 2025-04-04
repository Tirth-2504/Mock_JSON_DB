# use the official node.js image
FROM node:18-alpine

# set the working directory in container
WORKDIR /

# copy the package.json & dependency 
COPY package*.json ./

# copy al the app files
COPY . .

# expose the port the app running on
EXPOSE 3000

# run app with command
CMD ["node", "app.js"]