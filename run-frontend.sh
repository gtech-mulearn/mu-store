#!/bin/bash

# Navigate to the 'frontend' directory
cd frontend

# If 'node_modules' does not exist, install dependencies
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

read -p " install | dev | dev host | build | preview : " install_choice
if [ "$install_choice" = "dev" ]; then
  npm run dev
elif [ "$install_choice" = "build" ]; then
  npm run build
elif [ "$install_choice" = "preview" ]; then
  npm run preview
elif [ "$install_choice" = "install" ]; then
  npm install
elif [ "$install_choice" = "dev host" ]; then
  npm run dev -- --host
fi

