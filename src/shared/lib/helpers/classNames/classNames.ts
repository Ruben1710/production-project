type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[]
): string {
  mods = mods || {};
  additional = additional || [];
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, bool]) => bool)
      .map(([className]) => className),
  ].join(" ");
}
