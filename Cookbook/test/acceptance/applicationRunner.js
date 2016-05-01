var ApplicationRunner = function () {
    this.url = "http://localhost:10176";
    this.hasTitle = hasTitle;

    function hasTitle(title) {
        browser.get(this.url);
        expect(element(by.id("title")).getText()).toEqual(title);
    }

};

module.exports = new ApplicationRunner();
