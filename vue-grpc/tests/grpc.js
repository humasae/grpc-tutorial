describe('GRPC tutorial demo', function() {
  before(browser => browser.navigateTo('http://localhost:8080/'));

  it('Vue-grpc test', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('vue-grpc')
      // .assert.visible('input[type=search]')
      // .setValue('input[type=search]', 'nightwatch')
      .assert.visible('a[name=grpc]')
      .click('a[name=grpc]')
      .assert.visible('button[type=button]')
      .sendKeys('input[name=firstName]', ['prueba'])
      .sendKeys('input[name=secondName]', ['test'])
      .click('button[type=button]')
      .assert.textContains('h2', 'prueba test');
  });

  after(browser => browser.end());
});
