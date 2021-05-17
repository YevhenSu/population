#! /etc/bash

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


if [ "$str_default" == "$assert_default" ]
then 
	echo ""
else 
	echo "!!!!!assert_default test do not passed!!!!!"
fi


if [ "$str_Ukraine" == "$assert_Ukraine" ]
then 
	echo ""
else 
	echo "!!!!!assert_Ukraine test do not passed!!!!!"
fi


if [ "$str_Ukraine_2016" == "$assert_Ukraine_2016" ]
then 
	echo ""
else 
	echo "!!!!!assert_Ukraine_2016 test do not passed!!!!!"
fi


if [ "$str_Fran" == "$assert_Fran" ]
then 
	echo ""
else 
	echo "!!!!!assert_Fran test do not passed!!!!!"
fi


if [ "$str_France_2" == "$assert_France_2" ]
then 
	echo ""
else 
	echo "!!!!!assert_France_2 test do not passed!!!!!"
fi
