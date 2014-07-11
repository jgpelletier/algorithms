#!/bin/sh

set -e

echo "compiling code"
make clean
make ex17

echo "Creating Database"
./ex17 db.dat c 50 50

echo "Setting Records"
./ex17 db.dat s 1 John John@beatles.com
./ex17 db.dat s 2 Peter Peter@beatles.com
./ex17 db.dat s 3 Ringo Ringo@beatles.com
./ex17 db.dat s 4 Paul Paul@beatles.com
./ex17 db.dat s 5 George George@beatles.com

echo "Retrieving record 2"
./ex17 db.dat g 2

echo "Deleting record 2"
./ex17 db.dat d 2

echo "Listing database contents"
./ex17 db.dat l
