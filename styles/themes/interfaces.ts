export interface IThemeValues {
  title: string,
  backgroundBase: string,
  backgroundLevel1: string,
  backgroundLevel2: string,
  borderBase: string,
  textColorBase: string,
}

export interface ISelectedTheme extends IThemeValues {
  contrast: IThemeValues;
}

export interface ITheme {
  light: ISelectedTheme;
  dark: ISelectedTheme;
}

export type ThemeType = 'light' | 'dark'