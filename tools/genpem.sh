#!/bin/sh

mkdir .secret/
openssl genrsa -out private.pem 2048
openssl rsa -pubout -in private.pem -out public.pem

