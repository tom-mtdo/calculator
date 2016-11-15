* To run

1. install Nodejs: http://nodejs.org/
2. download project, keep folder name "calculator", main directory layout should look like:

``````````````````
calculator/
	app/
		components/
			arithmetic/
				arithmetic-service.js
				arithmetic-service_test.js
				arithmetic.html
				arithmetic.js
				arithmetic_test.js
			calculus/
			logarithmic/
			trigonometric/
			version/
		view-advance/
			view-advance.html
			view-advance.js
			view-advance_test.js
		view-basic/
			view-basic.html
			view-basic.js
			view-basic_test.js
		app.css
		app.js
		index-async.html
		index.html
	...
``````````````````

3. cd project folder: 

``````````````````
cd calculator
``````````````````

4. start develop web server

``````````````````
npm start
``````````````````

5. start Karma unit test

``````````````````
npm test
``````````````````

6. view result
http://localhost:8000