import React, { FC, useState, useEffect, useMemo } from 'react';
import { ConfigProvider as AntdProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { ConfigContext, ILocale, IConfigContext } from './configContext';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';


export interface IConfigProvider {
    defaultLocale: string;
    localeConfig: ILocale[],
}

export const ConfigProvider: FC<IConfigProvider> = ({
    defaultLocale,
    localeConfig,
    children
}) => {
    const [locale, setLocale] = useState(defaultLocale);
    const localeData = useMemo(() => {
        return localeConfig?.find(item => item.key === locale) || {
            key: 'zh',
            antdLocale: zhCN,
            momentLocale: 'zh-ch'
        }
    }, [locale, localeConfig])

    useEffect(() => {
        moment.locale(localeData.momentLocale)
        console.log(localeData)
    }, [localeData])

    const value: IConfigContext = {
        locale: localeData.key,
        setLocale,
        localeConfig
    }
    
    const renderIntl = () => {
        if (localeData.intlLocale && localeData.intlMessage) {
            return (
                <IntlProvider
                    locale={localeData?.intlLocale} 
                    messages={localeData.intlMessage}
                    children={children}
                />
            )
        }
        return children
    }

    
    return (
        <ConfigContext.Provider value={value}>
            <AntdProvider locale={localeData.antdLocale}>
                {renderIntl()}
            </AntdProvider>
        </ConfigContext.Provider>
    )

   
}

export default ConfigProvider

