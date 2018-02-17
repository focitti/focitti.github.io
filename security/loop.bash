#!/bin/sh
while true
do
	curl --data "login=mchow&lat=0&lng=0" https://defense-in-derpth.herokuapp.com/sendLocation
done
