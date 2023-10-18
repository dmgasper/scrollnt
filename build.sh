#! /bin/sh

cd ./scrollnt-live
npm run build
cd ../
rm -rf ./scrollnt/views/
mkdir ./scrollnt/views/
cp -r ./scrollnt-live/build/* ./scrollnt/views/