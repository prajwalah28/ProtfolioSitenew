# Use an official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which the React app will run (default: 5173 for Vite or 3000 for older CRA)
EXPOSE 3000

# Start the application using npm run dev
CMD ["npm", "run", "dev"]
