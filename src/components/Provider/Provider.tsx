import { FC, useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Locale } from 'antd/es/locale-provider'

interface ILocale {
    key: string;
    antdLocale: Locale;
    momentLocale: string;
    intlLocale: string;
    intlMessage: Record<string, string>;
}

interface ProviderProps {
    defaultLocale: ILocale;
    locales: ILocale[],
}

const Provider: FC<ProviderProps> = ({
    defaultLocale,
    locales,
    children
}) => {
    const [locale, setLocale] = useState<ILocale>(defaultLocale);
    useEffect(() => {
        if (locale) {
            
        }
    }, [locale])
    return (
        <ConfigProvider
            locale={locale.antdLocale}
        >
            <IntlProvider
                locale={locale.intlLocale} 
                messages={locale.intlMessage}
            >
                {children}
            </IntlProvider>
       </ConfigProvider>
   )
}

export default Provider