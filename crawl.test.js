const { normalizeURL } = require("./crawl");
const { test, expect } = require('@jest/globals');

test('normalizeURL strip protocol', () => {
    const url = "https://example.com/path/to/resource";
    const output = normalizeURL(url)
    const expected = "example.com/path/to/resource";
    expect(output).toEqual(expected);
})
test('normalizeURL strip trailing slash', () => {
    const url = "https://example.com/path/to/resource/";
    const output = normalizeURL(url)
    const expected = "example.com/path/to/resource";
    expect(output).toEqual(expected);
})
test('normalizeURL capitals', () => {
    const url = "https://example.com/path/to/resource";
    const output = normalizeURL(url)
    const expected = "example.com/path/to/resource";
    expect(output).toEqual(expected);
})