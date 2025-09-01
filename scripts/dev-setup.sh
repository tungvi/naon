#!/bin/bash

# Naon Development Setup Script

set -e

echo "🚀 Setting up Naon development environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Create .env file from example if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from example..."
    cp env.example .env
    echo "✅ Created .env file. Please review and update the values as needed."
fi

# Start database services
echo "🐘 Starting PostgreSQL and Redis..."
docker-compose up -d postgres redis

# Wait for services to be healthy
echo "⏳ Waiting for services to be ready..."
timeout=60
counter=0
while [ $counter -lt $timeout ]; do
    if docker-compose ps | grep -q "healthy"; then
        break
    fi
    echo "  Waiting for services... ($counter/$timeout)"
    sleep 2
    counter=$((counter + 2))
done

if [ $counter -ge $timeout ]; then
    echo "❌ Services did not start within $timeout seconds"
    exit 1
fi

echo "✅ Database services are ready!"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
fi

echo ""
echo "🎉 Development environment is ready!"
echo ""
echo "📋 Next steps:"
echo "  1. Review and update .env file with your configuration"
echo "  2. Start the backend: yarn start api"
echo "  3. Start the frontend: yarn start web"
echo "  4. Access pgAdmin at http://localhost:5050 (admin@naon.ai / admin)"
echo ""
echo "🔧 Useful commands:"
echo "  - Stop services: docker-compose down"
echo "  - View logs: docker-compose logs -f"
echo "  - Reset database: docker-compose down -v && ./scripts/dev-setup.sh"
echo ""
