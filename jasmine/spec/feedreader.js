/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

/*
*1 - Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
    For example, how would you use a for...of loop in this test?
 2 - Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
    Think about how you wrote the previous test. What are you testing for this time?
 3 - Write a new test suite named "The menu"
    What are you describe-ing in this test suite?
 4 - Write a test that ensures the menu element is hidden by default
    You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented
    What code in app.js is directly involved with toggling the menu on and off?
 5 - Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when     clicked, and does it hide when clicked again?
    Think about how you wrote the previous test. What is different this time around?
    Which clickable element are you checking for?
    How do you "simulate" a mouse click that element without actually clicking it?
 6 - Write a test suite named "Initial Entries"
    What are you describe-ing in this test suite?
 7 - Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
    How does Jasmine's beforeEach()function work?
    How does the loadFeed() function in app.js work? Is it synchronous or asynchronous?
 8 - Write a test suite named "New Feed Selection"
    What are you describe-ing in this test suite?
 9 - Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes
    How is this test different from the previous test?
*
*/

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */



    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        function test_feed_urls(x) {
            it('URLs are defined', function() {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url).not.toBe(0);
            });
        }

        for(var x = 0; x < allFeeds.length; x++) {
            test_feed_urls(x);
        }

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        function test_feed_names(y) {
            it('names are defined', function() {
                expect(allFeeds[y].name).toBeDefined();
                expect(allFeeds[y].name).not.toBe(0);
            });
        }

        for(var y = 0; y < allFeeds.length; y++) {
            test_feed_names(y);
        }
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         *
         */

        it('Menu is hidden by default', function() {
            var todo = document.getElementsByClassName("menu-hidden");
            expect(todo.length).not.toBe(0);
            expect(todo.length).not.toBe(0);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
