#!/bin/bash

# DON'T USE DIRECTLY !!
# ONLY USE IN DOCKER

# -------------------------------------------------------------------------------------------- IMPORTS

source utils.sh || { echo "ERROR : Unable to find 'utils.sh'." ; exit 1; }

# -------------------------------------------------------------------------------------------- VARIABLES


BUILD_DIR=dist/
HTML_INDEX=dist/index.html

JSON_STRING='window.configs = { \
  "VUE_APP_API_URL":"'"${VUE_APP_API_URL}"'", \
  "VUE_APP_LOCAL_INTERFACE_NAME":"'"${VUE_APP_LOCAL_INTERFACE_NAME}"'" \
}'

# -------------------------------------------------------------------------------------------- MAIN

showLogo

echo "CONFIG INJECTED : $JSON_STRING"

sed -i "s@// CONFIGURATIONS_PLACEHOLDER@${JSON_STRING}@" $HTML_INDEX

node app.js
