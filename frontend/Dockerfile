# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a simple web server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the React app
CMD ["serve", "-s", "build"]
