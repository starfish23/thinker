#!/bin/bash
mongoexport -h 127.0.0.1:81 -d meteor -c docs --out ./docs


grep "$1" docs | cut -d : -f 8-  | sed -r 's/.{20}$//'|cut -c 3-|sed 's/['\\']'"'/\'"'/g'  |sed 's/['\\']n/\
/g' >> "$1".inf

inform "$1".inf >> errors
exit
