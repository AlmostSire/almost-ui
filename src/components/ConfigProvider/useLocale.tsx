import React from 'react';
import { ConfigContext } from './configContext';

function useLocale () {
    return React.useContext(ConfigContext);
};

export default useLocale;
