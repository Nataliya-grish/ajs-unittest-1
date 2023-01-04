export default function healthPlayer({ name, health }) {
  switch (true) {
    case health >= 50:
      return `${name} healthy`;
    case health >= 15 && health < 50:
      return `${name} wounded`;
    default:
      return `${name} critical`;
  }
}

healthPlayer({ name: 'Маг', health: 90 });
