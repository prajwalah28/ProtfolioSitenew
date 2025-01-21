# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which the React app will run (default: 3000 for CRA or 5173 for Vite)
EXPOSE 3000

# Run the application using node app.js (assuming app.js is the entry point for your app)
CMD ["node", "app.js"]
