import styled from 'styled-components';

interface Props {
    outlined?: boolean;
    backgroundColor?: 'orange' | 'black' | 'orange-light';
}

const getBackgroundColor = (props: Props) => {
    if (props.outlined) {
        return 'transparent';
    }

    switch (props.backgroundColor) {
        case 'orange':
            return 'var(--orange)';
        case 'black':
            return 'var(--black)';
        case 'orange-light':
            return 'var(--orange-light-hover)';
        default:
            return 'var(--orange)';
    }
};

const getHoverBackgroundColor = (props: Props) => {
    if (props.outlined) {
        return 'var(--outline)';
    }

    switch (props.backgroundColor) {
        case 'orange':
            return 'var(--orange-light-hover)';
        case 'black':
            return 'var(--gray)';
        case 'orange-light':
            return 'var(--orange)';
        default:
            return 'var(--orange-light-hover)';
    }
};

export default styled.button<Props>`
    background: ${(props) => getBackgroundColor(props)};
    color: ${(props) => (props.outlined ? 'var(--black)' : 'var(--primary)')};
    border: ${(props) => (props.outlined ? '1px solid var(--gray)' : 'none')};

    padding: 16px;
    border-radius: 25px;

    cursor: pointer;
    outline: 0;

    &:hover {
        background: ${(props) => getHoverBackgroundColor(props)};
    }
`;

