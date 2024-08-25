#!/bin/bash

# Navigate to the 'frontend' directory
cd frontend

# Check if 'node_modules' directory exists
if [ -d "node_modules" ]; then
  # Prompt the user if they want to reinstall node modules
  read -p "Do you want to reinstall the dependencies? (y/n) " install_choice
  if [ "$install_choice" = "y" ]; then
    npm install
  else
    echo "Skipping npm install."
  fi
else
  # If 'node_modules' does not exist, install dependencies
  echo "Installing dependencies..."
  npm install
fi

# Ask if the user wants to expose the server using '--host'
read -p "Do you want to run the server with --host to expose it? (y/n) " host_choice

if [ "$host_choice" = "y" ]; then
  npm run dev -- --host
else
  npm run dev
fi
