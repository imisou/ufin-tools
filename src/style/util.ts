const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

// @ts-ignore
export const ieVersion = Number(document?.documentMode);

export const camelCase = (name: string): string => {
  return name
    .replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1');
};
