# Use the official Node.js image from the Docker Hub
FROM node:18-alpine

# Create and set the working directory
WORKDIR /opt/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 80

# Command to run the app
CMD ["node", "bree.js"]
