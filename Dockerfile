# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port your app will run on (usually 3000 for React)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
