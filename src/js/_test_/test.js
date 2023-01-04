import healthPlayer from "../app";

test.each([
  ["Маг healthy", { name: "Маг", health: 90 }],
  ["Маг wounded", { name: "Маг", health: 35 }],
  ["Маг critical", { name: "Маг", health: 10 }],
])("Проверка работы функции c показателем жизни %s", (expected, obj) => {
  const result = healthPlayer(obj);
  expect(result).toBe(expected);
});
