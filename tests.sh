#! /bin/bash

str_default=`node app.js`
assert_default="Population in Ukraine in 2016: 45004645"

str_Ukraine=`node app.js Ukraine`
assert_Ukraine="Population in Ukraine in 2016: 45004645"

str_Ukraine_2016=`node app.js Ukraine 2016`
assert_Ukraine_2016="Population in Ukraine in 2016: 45004645"

str_Fran=`node app.js Fran 2016`
assert_Fran="Population in Ukraine in 2016: 45004645"

str_France_2=`node app.js France 2`
assert_France_2="Population in France in 2016: 66896109"


function test() {
	if [ "$1" == "$2" ]
	then 
		echo ""
	else 
		echo "!!!!!$2 test do not passed!!!!!"
	fi
}

test "$str_default" "$assert_default"

test "$str_Ukraine" "$assert_Ukraine"

test "$str_Ukraine_2016" "$assert_Ukraine_2016"

test "$str_Fran" "$assert_Fran"

test "$str_France_2" "$assert_France_2"
