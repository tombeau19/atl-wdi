--Clue #1
SELECT name, region, population FROM country WHERE region = 'Southern Europe' ORDER BY population;
--Answer: Holy See (Vatican City State)

--Clue #2
SELECT language FROM countrylanguage WHERE countrycode='VAT';
--Answer: Italian

--Clue #3
SELECT * FROM countrylanguage WHERE language='Italian' AND isofficial='t';
SELECT * FROM country WHERE code='ITA' OR code='SMR' OR code='CHE';
--answer: Italy San Marino Switzerland

--Clue #4
SELECT * FROM city WHERE countrycode='ITA' OR countrycode='SMR' OR countrycode='CHE';
--answer Serravalle/Dogano






commit after 4