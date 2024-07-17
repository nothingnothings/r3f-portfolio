#!/bin/sh
npx npm-force-resolutions
npm install --legacy-peer-deps
npm run build