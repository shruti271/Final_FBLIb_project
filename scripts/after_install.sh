#!/bin/bash

# navigate to app folder
cd /home/ec2-user/fbadslib-frontend

# install dependencies
sudo npm install --force

# install create-react-app and react-scripts
# without react-scripts application cannot be started
sudo npm install --save create-react-app react-scripts --force

# # install pm2 process manager
# sudo npm install pm2 -g --force

sudo nginx -t && sudo systemctl restart nginx