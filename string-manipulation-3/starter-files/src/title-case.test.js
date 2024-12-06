/* global expect, titleCase */

describe('titleCase(string)', function () {
  function randomCase(string) {
    let cased = '';
    for (let i = 0; i < string.length; i++) {
      const random = Math.random();
      if (random < 0.5) {
        cased += string[i].toLowerCase();
      } else {
        cased += string[i].toUpperCase();
      }
    }
    return cased;
  }

  beforeEach(function () {
    expect(titleCase).to.be.a('function');
  });

  it('title cases "composing software"', function () {
    const input = randomCase('composing software');
    const output = titleCase(input);
    expect(output).to.equal('Composing Software');
  });

  it('title cases "high performance browser networking"', function () {
    const input = randomCase('high performance browser networking');
    const output = titleCase(input);
    expect(output).to.equal('High Performance Browser Networking');
  });

  it('title cases "node.js in action"', function () {
    const input = randomCase('node.js in action');
    const output = titleCase(input);
    expect(output).to.equal('Node.js in Action');
  });

  it('title cases "professional JavaScript for web developers', function () {
    const input = randomCase('professional JavaScript for web developers');
    const output = titleCase(input);
    expect(output).to.equal('Professional JavaScript for Web Developers');
  });

  it('title cases "secrets of the javascript ninja"', function () {
    const input = randomCase('secrets of the javascript ninja');
    const output = titleCase(input);
    expect(output).to.equal('Secrets of the JavaScript Ninja');
  });

  it('title cases "web audio api"', function () {
    const input = randomCase('web audio api');
    const output = titleCase(input);
    expect(output).to.equal('Web Audio API');
  });

  it('title cases "javascript: the definitive guide"', function () {
    const input = randomCase('javascript: the definitive guide');
    const output = titleCase(input);
    expect(output).to.equal('JavaScript: The Definitive Guide');
  });

  it('title cases "speaking Javascript: an in-depth guide for programmers"', function () {
    const input = randomCase(
      'speaking Javascript: an in-depth guide for programmers'
    );
    const output = titleCase(input);
    expect(output).to.equal(
      'Speaking JavaScript: An In-Depth Guide for Programmers'
    );
  });

  it('title cases "the self-taught programmer: the definitive guide to programming professionally"', function () {
    const input = randomCase(
      'the self-taught programmer: the definitive guide to programming professionally'
    );
    const output = titleCase(input);
    expect(output).to.equal(
      'The Self-Taught Programmer: The Definitive Guide to Programming Professionally'
    );
  });

  it('title cases "an absolute beginner\'s guide to cryptocurrency"\'', function () {
    const input = randomCase("an absolute beginner's guide to cryptocurrency");
    const output = titleCase(input);
    expect(output).to.equal("An Absolute Beginner's Guide to Cryptocurrency");
  });

  it('title cases "hop on pop"', function () {
    const input = randomCase('hop on pop');
    const output = titleCase(input);
    expect(output).to.equal('Hop on Pop');
  });

  it('title cases "the cat in the hat"', function () {
    const input = randomCase('the cat in the hat');
    const output = titleCase(input);
    expect(output).to.equal('The Cat in the Hat');
  });

  it('title cases "green eggs and ham"', function () {
    const input = randomCase('green eggs and ham');
    const output = titleCase(input);
    expect(output).to.equal('Green Eggs and Ham');
  });

  it('title cases "fox in socks"', function () {
    const input = randomCase('fox in socks');
    const output = titleCase(input);
    expect(output).to.equal('Fox in Socks');
  });

  it('title cases "what pet should i get?"', function () {
    const input = randomCase('what pet should i get?');
    const output = titleCase(input);
    expect(output).to.equal('What Pet Should I Get?');
  });
});
