#!/usr/bin/sh

cd ./scrollnt-live
npm run build
cd ../
rm -rf ./scrollnt/views/*
cp ./scrollnt-live/build/* ./scrollnt/views/