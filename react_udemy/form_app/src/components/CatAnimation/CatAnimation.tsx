import React from 'react';
import './CatImage.css';

type CatAnimationProps = {
    start: boolean;
}

export const CatAnimation = ({start}: CatAnimationProps) => {
    return (
        <div className="cat-wrapper">
            {start && <div className="cat"></div>}
        </div>
    );
};