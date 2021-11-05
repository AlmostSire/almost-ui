import { FC, CSSProperties } from 'react';

export interface AdoptableBoxProps {
    style?: CSSProperties;
}

export const AdoptableBox: FC<AdoptableBoxProps> = ({ children, style }) => (
    <div 
        className='almost-layout-adaptable'
        style={style}
    >
        {children}
    </div>
)
AdoptableBox.displayName = 'AdoptableBox';

export default AdoptableBox;