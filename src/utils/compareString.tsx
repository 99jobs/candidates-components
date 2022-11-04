export function compareString(term1: string = '', term2: string = ''): boolean {
  return term1
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .includes(
      term2
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase()
    )
}
