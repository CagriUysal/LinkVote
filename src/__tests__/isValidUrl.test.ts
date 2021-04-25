import isValidUrl from "../helpers/utils/isValidUrl";

test("https://example.com is valid url", () => {
  expect(isValidUrl("https://example.com")).toBe(true);
});

test("http://example.com is valid url", () => {
  expect(isValidUrl("http://example.com")).toBe(true);
});

test("htp://example.com is not valid url", () => {
  expect(isValidUrl("htp://example.com")).toBe(false);
});

test("'random string' is not valid url", () => {
  expect(isValidUrl("random string")).toBe(false);
});
