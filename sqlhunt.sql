-- 1. Find the country with the highest number of engineers.
---- country with highest number of engineers
---- subquery - join country id with country name
---- group engineers by country and count
---- order by count, descending order, first result
SELECT name as country, COUNT (*) as engineers FROM (
SELECT engineers.country_id, countries.name
FROM engineers INNER JOIN countries
ON engineers .country_id = countries.id ) AS SUBQUERY
GROUP BY name ORDER BY COUNT(*) DESC LIMIT 1;

-- 2. Find the three teams with the highest number of engineers and order them by the number of bugs, largest first.
---- join engineers table with teams table
---- count and order by engineers per team, descending order, top three results
---- order by by bugs
SELECT * FROM (SELECT team_id, current_bugs, count(team_id) as engineers
FROM (SELECT * FROM engineers JOIN teams
ON engineers .team_id = teams.id) AS SUBQUERY
GROUP BY team_id, current_bugs
ORDER BY COUNT(team_id) DESC LIMIT 3) AS SUBQUERY
ORDER BY current_bugs DESC;

-- 3. Find the oldest engineer with a repository written using functional programming. If needed, the winner is the one with the most functional programming repositories.
---- join engineer_programming_languages and programming_languages table for category types
---- show only engineers that program using functional lanuages
---- show only engineers that are the max age
---- sort by number of repos, descending order, limit 1 for highest number
SELECT engineer_id, category as languageType, age, repositories, first_name, last_name FROM
	(SELECT category, age, engineer_id, repositories, first_name, last_name FROM
		(SELECT * FROM
	 		(SELECT * FROM engineer_programming_languages AS eng_lang
		 		JOIN programming_languages AS languages
		 		ON eng_lang .programming_language_id = languages.id) AS QUERY1
 		 	JOIN engineers ON QUERY1 .engineer_id = engineers.id
			) AS QUERY2 WHERE category = 'Functional' AND (SELECT max(age) FROM engineers) = age
			ORDER BY age DESC) AS SUBQUERY
		ORDER BY repositories DESC LIMIT 1;

-- 4. Find the second least represented region across all the teams.
---- count and group counties by region, exclude countries with no population (bouvet island)
---- order in ascending order, least is first
---- offset by one to make second least first, then limit 1
SELECT * FROM (SELECT region, count(region) from countries
WHERE population > 0
GROUP BY region
ORDER BY count(region) ASC) AS SUBQUERY
OFFSET 1
LIMIT 1;

-- 5. Find who published the book with the highest average rating.
---- FOR ALL BOOKS WITH HIGHEST RATING, REGARDLESS OF TIMES READ
    ---- join books and bookshelves, show only books with max rating
SELECT publisher, rating FROM (SELECT * FROM books
			   JOIN bookshelves
			ON books .id = bookshelves.book_id)
			AS SUBQUERY
			WHERE rating = (SELECT max(rating) from bookshelves);

---- FOR BOOKS WITH HIGHEST RATING AND HIGHEST TIMES READ
    ---- join books and bookshelves, show only books with max rating and max times read
SELECT publisher, rating, times_read FROM (
	SELECT publisher, rating, times_read FROM
		(SELECT * FROM books JOIN bookshelves
			ON books .id = bookshelves.book_id)
			AS SUBQUERY
			WHERE rating = (SELECT max(rating) from bookshelves)
				AND times_read = (SELECT max(times_read) from bookshelves)
		ORDER BY times_read DESC) AS SUBQUERY
		GROUP BY subquery.publisher, subquery.rating, subquery.times_read;

-- 6. Find the capital of the country where the oldest person in the team that shipped the most features comes from.
---- join engineers and teams tables
---- show only engineers on team with max features shipped
---- order by age, descending order, limit one for oldest
---- join this subquery with countries for capital name
SELECT capital, countries.name, age, features_shipped FROM (
SELECT * FROM (SELECT * FROM engineers
				JOIN teams
				ON engineers .team_id = teams.id) AS SUBQUERY
WHERE features_shipped = (SELECT max(features_shipped) FROM teams)
ORDER BY age DESC LIMIT 1) AS SUBQUERY
JOIN countries
ON SUBQUERY .country_id = countries.id;

-- 7. Find the inventor of the third most used programming language by the teams on the most populated floor.
---- join teams, engineers, programming languages, engineer programming languages tables
---- shows only floor with highest count of engineers
SELECT langname, inventor, floor, count(languageid) as usedby from (
SELECT
	teams.floor, engineers.team_id, engineers.id as engineerID,
	engineer_programming_languages.programming_language_id as languageID,
	engineer_programming_languages.engineer_id as engineerID,
	programming_languages.inventor, programming_languages.name as langname
FROM ((teams
INNER JOIN
    engineers ON teams.id = engineers.team_id)
INNER JOIN
    engineer_programming_languages
ON engineers.id = engineer_programming_languages.engineer_id)
INNER JOIN
    programming_languages ON
    programming_languages.id = engineer_programming_languages.programming_language_id
WHERE
    floor = (SELECT floor FROM (SELECT teams.floor, engineers.id
 	FROM teams
 	INNER JOIN engineers ON teams.id = engineers.team_id) as subquery
	LIMIT 1)) AS subquery
GROUP BY subquery.languageid, subquery.langname, subquery.inventor, subquery.floor
ORDER BY usedby DESC
OFFSET 2
LIMIT 1;

-- 8. Find the book least read by the the engineers who develop in Ruby.
---- join engineers, engineer languages, and languages tables
---- show only engineer ids that use ruby
---- join bookshelves with engineers, match ruby engineers id with books read, show only books read the least amount of times
---- join with books for title names
SELECT books.title, times_read FROM (
(SELECT book_id, times_read FROM (
SELECT engineers.id as engineerid
FROM ((engineers INNER JOIN engineer_programming_languages
	  	ON engineers.id = engineer_programming_languages.engineer_id))
		INNER JOIN programming_languages ON programming_languages.id = engineer_programming_languages.programming_language_id
		WHERE name = 'Ruby') AS SUBQUERY
		INNER JOIN bookshelves ON bookshelves.engineer_id = engineerid
		ORDER BY times_read)) as subquery		
	INNER JOIN books on subquery.book_id = books.id	
 	WHERE times_read = (SELECT (min(times_read)) FROM bookshelves)
	GROUP BY title, subquery.times_read
	ORDER BY times_read;