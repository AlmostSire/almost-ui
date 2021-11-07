import React from 'react';
import { Locale } from 'antd/es/locale-provider';

export interface ILocale {
    key: string;
    antdLocale: Locale;
    momentLocale: string;
    intlLocale?: string;
    intlMessage?: Record<string, string>;
}

export interface IConfigContext {
    locale?: string;
    setLocale?: (locale: string) => void;
    localeConfig?: ILocale[]
}

export const ConfigContext = React.createContext<IConfigContext>({})

export default ConfigContext;
