import { memo } from 'react';
import LinkItem from '../LinkItem';

const Header = (props) => {
    const giveFont = () => 'fantasy';
    console.log('Header')
    const style = {
        height: 'auto',
        background: '#f38181',
        fontFamily: giveFont(),
        textAlign: 'center'
    }; 

    return (
        <header>
            <div
                style={style}
            >
                <h1>{props.title}</h1>
                <LinkItem title="Home"/>
            </div>
        </header>
    )
};

export default memo(Header);
