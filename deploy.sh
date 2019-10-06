#!/bin/bash

remoteHost=github.com
remoteUser=AbderrahimSoubaiElidrissi
localCodeDir="${HOME}/app/"
repoName="dummy-api" 
echo -e "Working..\n"

cd $localCodeDir &&  git pull ssh://$remoteUser@$remoteHost/$repoName

echo -e "Done.\n"
