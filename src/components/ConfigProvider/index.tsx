
import React from 'react';
import { ConfigProvider, IConfigProvider } from './configProvider';
import { IConfigContext } from './configContext'
import useLocale from './useLocale'; 

export type IConfigProviderComponent = React.FC<IConfigProvider> & {
    useLocale: () => IConfigContext;
}

const ConfigProviderComponent =  ConfigProvider as IConfigProviderComponent

ConfigProviderComponent.useLocale = useLocale;

export default ConfigProviderComponent;