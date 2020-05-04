#!/usr/bin/env bash
echo "pm2 deleting all apps!"
pm2 delete all
echo "pulling from repo"
git pull
echo "start server"
npm run prod
