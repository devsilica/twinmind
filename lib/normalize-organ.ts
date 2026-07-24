export function normalizeOrgan(organ?: string) {
  switch (organ) {
    case 'left-lung':
    case 'right-lung':
      return 'lungs'

    case 'kidney-left':
    case 'kidney-right':
      return 'kidneys'

    default:
      return organ ?? 'lungs'
  }
}