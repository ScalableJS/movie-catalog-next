# Note: This is a dockerfile for the development environment
FROM node:18-alpine
# Working directory
WORKDIR /app


# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the source code
COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

# Build the app
CMD ["npm", "run", "dev"]