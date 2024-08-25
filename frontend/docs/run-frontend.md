# Running the Frontend

- **Cross-Platform Compatibility**: If you are on Windows, ensure that you use a Unix-like shell such as Git Bash or Windows Subsystem for Linux (WSL) to run the script.
- **Permissions**: `Before running the script for the first time`, you may need to make it executable:

## Run `run-frontend.sh` Script

To make it easier to run the project, a Bash script is provided. You can execute this script to start the development server.

```bash
./run-frontend.sh
```

- **CI/CD**: If you're using CI/CD tools like GitHub Actions, ensure this script isn't executed automatically during the build process unless that's intended.

### What the Script Does

- **Dependency Installation**: The script checks if the `node_modules` directory exists. If it does, you'll be asked if you want to reinstall the dependencies. If it doesn't exist, dependencies will be installed automatically.
- **Server Exposure**: The script asks if you want to expose the development server using the `--host` option, which makes it accessible over the local network.

# Access the Application

After running the script, Vite will start a development server. By default, the application will be accessible at:

<http://localhost:5173>

If you chose to use the `--host` option, you can access it via your local network using your machine's IP address.
