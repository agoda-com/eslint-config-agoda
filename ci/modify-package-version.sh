#!/bin/bash

set -e

NEW_VERSION=$1

if [ -z "$NEW_VERSION" ]
then
  echo "No new version supplied"
  exit 1
fi

FILES=$(find packages -name 'package.json')

for FILE in $FILES
do
  if $(jq -e '.private!=true' $FILE > /dev/null)
  then
    jq --indent 4 --arg NEW_VERSION "$NEW_VERSION" '.version=$NEW_VERSION' $FILE > temp.json && mv temp.json $FILE
  fi
done
