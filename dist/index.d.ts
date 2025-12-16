import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ReactNode } from 'react';
import * as libphonenumber_js from 'libphonenumber-js';
import { MetadataJson, NumberType } from 'libphonenumber-js';
import { MenuItemProps } from 'react-aria-components';
import { InputProps } from '@heroui/react';

declare const COUNTRIES: MetadataJson['countries'];
declare const ISO_CODES: libphonenumber_js.CountryCode[];
type HeroTelInputCountry = (typeof ISO_CODES)[number];
declare const DEFAULT_ISO_CODE: HeroTelInputCountry;

type HeroTelInputContinent = 'EU' | 'AS' | 'NA' | 'SA' | 'OC' | 'AF';
type Continents = {
    [key in HeroTelInputContinent]: HeroTelInputCountry[];
};
declare const CONTINENTS: Continents;

type FlagDialogProps = {
    children: React.ReactNode;
    classNames?: FlagDialogClassNames;
};
type FlagDialogClassNames = {
    dialog?: string;
};
type FlagDialogContentClassNames = {
    dialogContent?: string;
};
type FlagDialogContentProps = {
    children: React.ReactNode;
    classNames?: FlagDialogContentClassNames;
};
declare const FlagDialog: (props: FlagDialogProps) => react_jsx_runtime.JSX.Element;
declare const FlagDialogContent: (props: FlagDialogContentProps) => react_jsx_runtime.JSX.Element;

type FlagMenuItemProps = MenuItemProps & {
    isoCode: HeroTelInputCountry | null;
    name: string;
    unknownFlagElement: React.ReactNode;
    classNames?: FlagMenuItemClassNames;
    active?: boolean;
};
type FlagMenuItemClassNames = {
    menuItem?: string;
};
declare const FlagMenuItem: (props: FlagMenuItemProps) => react_jsx_runtime.JSX.Element;

type FlagModalClassNames = {
    modal?: string;
};
type FlagModalProps = {
    children: React.ReactNode;
    classNames?: FlagModalClassNames;
};
declare const FlagModal: (props: FlagModalProps) => react_jsx_runtime.JSX.Element;

type FlagModalOverlayProps = {
    children: React.ReactNode;
    isDismissable?: boolean;
    classNames?: FlagModalOverlayClassNames;
};
type FlagModalOverlayClassNames = {
    overlay?: string;
};
declare const FlagModalOverlay: (props: FlagModalOverlayProps) => react_jsx_runtime.JSX.Element;

type FlagSearchFieldProps = {
    searchAriaLabel?: string;
    searchPlaceholder?: string;
    classNames?: FlagSearchFieldClassNames;
};
type FlagSearchFieldClassNames = {
    textField?: string;
    searchInput?: string;
};
declare const FlagSearchField: (props: FlagSearchFieldProps) => react_jsx_runtime.JSX.Element;

type FlagAutocompleteClassNames = FlagDialogClassNames & FlagDialogContentClassNames & FlagMenuItemClassNames & FlagSearchFieldClassNames & FlagModalClassNames & FlagModalOverlayClassNames;
type FlagAutocompleteProps = {
    isoCode: HeroTelInputCountry | null;
    activedCountryInTop?: boolean;
    forceCallingCode?: boolean;
    unknownFlagElement?: ReactNode;
    onlyCountries?: HeroTelInputCountry[];
    excludedCountries?: HeroTelInputCountry[];
    preferredCountries?: HeroTelInputCountry[];
    langOfCountryName?: Intl.LocalesArgument;
    disableDropdown?: boolean;
    continents?: HeroTelInputContinent[];
    onSelectCountry: (isoCode: HeroTelInputCountry) => void;
    classNames?: FlagAutocompleteClassNames;
} & Pick<FlagSearchFieldProps, 'searchAriaLabel' | 'searchPlaceholder'>;
declare const FlagAutocomplete: (props: FlagAutocompleteProps) => react_jsx_runtime.JSX.Element;

type Flags = {
    AC: string;
    TA: string;
};
declare const FLAGS_SVG: Flags;

declare const DEFAULT_LANG = "en";

/***
 * Check if the value is an array.
 * @param value - value to check
 * @param filled - if true, check if the array is filled
 * @returns true if the value is an array
 */
declare function matchIsArray(value: unknown, filled?: boolean): value is unknown[];
/***
 * Get the first intersection of two arrays.
 * @param arrayA - first array
 * @param arrayB - second array
 * @returns the first intersection
 */
declare function getFirstIntersection<T extends unknown[]>(arrayA: T, arrayB: T): T[number] | null;

type FilterCountriesOptions = {
    onlyCountries?: readonly HeroTelInputCountry[];
    excludedCountries?: readonly HeroTelInputCountry[];
    preferredCountries?: readonly HeroTelInputCountry[];
    continents?: readonly HeroTelInputContinent[];
};
/***
 * Get the calling code of a country.
 * @param isoCode - country ISO code
 * @returns calling code
 */
declare function getCallingCodeOfCountry(isoCode: HeroTelInputCountry): string;
/***
 * Get the valid country.
 * @param country - country ISO code
 * @returns valid country
 */
declare function getValidCountry(country?: HeroTelInputCountry): HeroTelInputCountry;
/***
 * Sort preferred countries.
 * @param countries - countries
 * @param preferredCountries - preferred countries
 * @returns sorted countries
 */
declare function sortPreferredCountries(countries: readonly HeroTelInputCountry[], preferredCountries: readonly HeroTelInputCountry[]): readonly HeroTelInputCountry[];
/***
 * Get the countries of continents.
 * @param continents - continents
 * @returns countries
 */
declare function getCountriesOfContinents(continents: readonly HeroTelInputContinent[]): readonly HeroTelInputCountry[];
/***
 * Get the only countries.
 * @param countries - countries
 * @param onlyCountries - only countries
 * @returns only countries
 */
declare function getOnlyCountries(countries: readonly HeroTelInputCountry[], onlyCountries: readonly HeroTelInputCountry[]): readonly HeroTelInputCountry[];
/***
 * Exclude countries.
 * @param countries - countries
 * @param excludedCountries - excluded countries
 * @returns excluded countries
 */
declare function excludeCountries(countries: readonly HeroTelInputCountry[], excludedCountries?: readonly HeroTelInputCountry[]): readonly HeroTelInputCountry[];
/***
 * Sort alphabetically country codes.
 * @param countryCodes - country codes
 * @param displayNames - display names
 * @returns sorted country codes
 */
declare function sortAlphabeticallyCountryCodes(countryCodes: readonly HeroTelInputCountry[], displayNames: Intl.DisplayNames): readonly HeroTelInputCountry[];
/***
 * Filter countries.
 * @param countries - countries
 * @param displayNames - display names
 * @param options - options
 * @returns filtered countries
 */
declare function filterCountries(countries: readonly HeroTelInputCountry[], displayNames: Intl.DisplayNames, options: FilterCountriesOptions): readonly HeroTelInputCountry[];
/***
 * Match continents include country.
 * @param continents - continents
 * @param isoCode - country ISO code
 * @returns true if the country is in the continents
 */
declare function matchContinentsIncludeCountry(continents: HeroTelInputContinent[], isoCode: HeroTelInputCountry): boolean;

/***
 * Put the cursor at the end of the input.
 * @param inputElement - input element
 */
declare function putCursorAtEndOfInput(inputElement: HTMLInputElement): void;

declare const getDefaultImageSrc: (isoCode: HeroTelInputCountry) => string;
declare const defaultUnknownFlagElement: react_jsx_runtime.JSX.Element;

/***
 * Get the display names.
 * @param lang - language
 * @returns display names
 */
declare function getDisplayNames(lang?: Intl.LocalesArgument): Intl.DisplayNames;

/***
 * Check if the value is an object.
 * @param value - value to check
 * @returns true if the value is an object
 */
declare function matchIsObject(value: unknown): value is object;
/***
 * Get the keys of an object.
 * @param object - object
 * @returns keys
 */
declare const getObjectKeys: <T>(object: T) => (keyof T)[];

/***
 * Remove the occurrence of a part from a string.
 * @param text - text to remove the occurrence from
 * @param part - part to remove
 * @returns text without the occurrence
 */
declare function removeOccurrence(text: string, part: string | RegExp): string;

/***
 * Match if the phone number is valid.
 * @param text - phone number string
 * @param options - options
 * @returns true if the phone number is valid
 */
declare function matchIsValidTel(text: string, options?: {
    excludedCountries?: HeroTelInputCountry[];
    onlyCountries?: HeroTelInputCountry[];
    continents?: HeroTelInputContinent[];
}): boolean;

/***
 * The reason for input change.
 * - 'country': country changed
 * - 'input': user input
 * - 'blur': input lost focus
 */
type HeroTelInputReason = 'country' | 'input' | 'blur';
/***
 * Callback for input value change.
 * @param value - phone number string
 * @param info - phone info details
 */
type HeroTelInputOnChange = (value: string, info: HeroTelInputInfo) => void;
/***
 * Info object for phone input state.
 */
interface HeroTelInputInfo {
    /** ISO country code, e.g. 'CN', or null */
    countryCode: HeroTelInputCountry | null;
    /** Country calling code, e.g. '86', or null */
    countryCallingCode: string | null;
    /** National number part, or null */
    nationalNumber: string | null;
    /** Number type (e.g. 'MOBILE'), or null */
    numberType: Exclude<NumberType, undefined> | null;
    /** E.164 formatted value, or null */
    numberValue: string | null;
    /** Change reason */
    reason: HeroTelInputReason;
}
/***
 * Base input props, omitting internal fields.
 */
type BaseInputProps = Omit<InputProps, 'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue' | 'inputProps' | 'InputProps' | 'classNames'>;
/***
 * If forceCallingCode is true, defaultCountry is required.
 */
type ForceCallingCodeWithDefaultCountry = {
    /**
     * Displays the calling code (e.g: +33) as read-only next to the flag and with a divider instead of as part of the input field. Needs defaultCountry prop to be defined or will default to US.
     */
    forceCallingCode: true;
    /**
     * Sets the selected country on component mount
     */
    defaultCountry: HeroTelInputCountry;
} | {
    /**
     * Displays the calling code (e.g: +33) as read-only next to the flag and with a divider instead of as part of the input field. Needs defaultCountry prop to be defined or will default to US.
     */
    forceCallingCode?: false | undefined;
    /**
     * Sets the selected country on component mount
     */
    defaultCountry?: HeroTelInputCountry;
};
/***
 * Props for HeroTelInput component.
 */
type HeroTelInputProps$1 = BaseInputProps & ForceCallingCodeWithDefaultCountry & {
    /**
     * Country codes to be included in the list of countries.
     */
    onlyCountries?: HeroTelInputCountry[];
    /**
     * Country codes to be excluded of the list of countries.
     */
    excludedCountries?: HeroTelInputCountry[];
    /**
     * Country codes to be highlighted to the top of the list of countries.
     */
    preferredCountries?: HeroTelInputCountry[];
    /**
     * No country list / The current flag is a span instead of a button.
     */
    disableDropdown?: boolean;
    /**
     * An Intl locale to translate country names (see Intl locales). All countries will be translated in this language.
     */
    langOfCountryName?: string;
    /**
     * The value of the input.
     */
    value?: string | undefined;
    /**
     * Remove format (spaces..) from the input value.
     *
     * @default false
     */
    disableFormatting?: boolean;
    /**
     * Autofocus the input when the user selects a country in the list.
     *
     * @default true
     */
    focusOnSelectCountry?: boolean;
    /**
     * Continent codes to include a group of countries.
     */
    continents?: HeroTelInputContinent[];
    /**
     * Gets called when the input loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, info: HeroTelInputInfo) => void;
    /**
     * Gets called once the user updates the tel value.
     *
     * The callback gives you 2 parameters:
     *
     * - The new tel value stringified
     * - An object of different useful informations about the tel (country, extension, etc..)
     */
    onChange?: HeroTelInputOnChange;
    /**
     * This prop let you to customize the unknown flag, changed the width or height, use CDN or SVG component, etc..
     */
    unknownFlagElement?: React.ReactNode;
    /**
     * The aria-label of the search input.
     *
     * @default "Search countries"
     */
    searchAriaLabel?: string;
    /**
     * The placeholder of the search input.
     *
     * @default "Search countries..."
     */
    searchPlaceholder?: string;
    /**
     * The actived country code to be highlighted to the top of the list of countries.
     *
     * @default true
     */
    activedCountryInTop?: boolean;
};

type HeroTelInputClassNames = {
    input?: InputProps['classNames'];
};
type HeroTelInputProps = HeroTelInputProps$1 & {
    classNames?: HeroTelInputClassNames & FlagAutocompleteClassNames;
};
declare const HeroTelInput: (props: HeroTelInputProps) => react_jsx_runtime.JSX.Element;

type Options = Pick<InputProps, 'onDoubleClick' | 'onCopy' | 'onFocus'> & {
    inputRef: React$1.RefObject<HTMLInputElement | null>;
};
/***
 * Hook for handling events on HeroTelInput component.
 * @param options - event handlers and input reference
 * @returns event handlers
 */
declare function useEvents({ onDoubleClick, onCopy, onFocus, inputRef, }: Options): {
    handleDoubleClick: (event: React$1.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    handleCopy: (event: React$1.ClipboardEvent<HTMLInputElement>) => void;
    handleFocus: (event: React$1.FocusEvent<HTMLInputElement, Element>) => void;
};

/***
 * Hook for checking if the props are mismatched.
 * @param props - HeroTelInputProps
 */
declare function useMismatchProps(props: HeroTelInputProps$1): void;

type State = {
    inputValue: string;
    isoCode: HeroTelInputCountry | null;
};
type GetInitialStateParams = {
    defaultCountry?: HeroTelInputCountry;
    initialValue: string;
    forceCallingCode: boolean;
    disableFormatting: boolean;
};
/***
 * Get the initial state for the phone input.
 * @param params - GetInitialStateParams
 * @returns State
 */
declare function getInitialState(params: GetInitialStateParams): State;

export { type BaseInputProps, CONTINENTS, COUNTRIES, DEFAULT_ISO_CODE, DEFAULT_LANG, FLAGS_SVG, FlagAutocomplete, type FlagAutocompleteClassNames, type FlagAutocompleteProps, FlagDialog, type FlagDialogClassNames, FlagDialogContent, type FlagDialogContentClassNames, type FlagDialogContentProps, type FlagDialogProps, FlagMenuItem, type FlagMenuItemClassNames, type FlagMenuItemProps, FlagModal, type FlagModalClassNames, FlagModalOverlay, type FlagModalOverlayClassNames, type FlagModalOverlayProps, type FlagModalProps, FlagSearchField, type FlagSearchFieldClassNames, type FlagSearchFieldProps, type ForceCallingCodeWithDefaultCountry, HeroTelInput, type HeroTelInputContinent, type HeroTelInputCountry, type HeroTelInputInfo, type HeroTelInputOnChange, type HeroTelInputProps$1 as HeroTelInputProps, type HeroTelInputReason, ISO_CODES, defaultUnknownFlagElement, excludeCountries, filterCountries, getCallingCodeOfCountry, getCountriesOfContinents, getDefaultImageSrc, getDisplayNames, getFirstIntersection, getInitialState, getObjectKeys, getOnlyCountries, getValidCountry, matchContinentsIncludeCountry, matchIsArray, matchIsObject, matchIsValidTel, putCursorAtEndOfInput, removeOccurrence, sortAlphabeticallyCountryCodes, sortPreferredCountries, useEvents, useMismatchProps };
