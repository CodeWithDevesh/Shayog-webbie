# Use an official Node.js runtime for building the React app
FROM node:22 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the production version of the React app
RUN npm run build

# Use Nginx to serve the built static files
FROM nginx:alpine

# Copy the built files from the build stage to Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
