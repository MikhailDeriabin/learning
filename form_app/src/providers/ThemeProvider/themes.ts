export type Theme = {
    colors: {
        background: string;
        text: string;
        error: string;
        button: {
            text: string;
            background: string;
            hover: {
                text: string;
                background: string;
            };
        };
        input: {
            text: string;
            background: string;
            hover: {
                text: string;
                background: string;
            };
        };
        select: {
            text: string;
            background: string;
            hover: {
                text: string;
                background: string;
            };
            focus: {
                text: string;
                background: string;
            };
        };
        border: string;
    };

    fonts: {
        family: string,
        sizes: {
            small: string;
            medium: string;
            large: string;
        };
    };

    widths: {
        content: string;
        input: string;
        button: string;
    };

    heights: {
        input: string;
        button: string;
        checkbox: string;
    };

    paddings: {
        input: {t: string, b: string, l: string, r: string};
        button: {t: string, b: string, l: string, r: string};
    };

    spacing: {
        small: string;
        medium: string;
        large: string;
    };

    borders: {
        radius: string;
        width: string;
    };
}

export const lightTheme: Theme = {
    colors: {
        background: '#FDFDFD',
        text: '#707070',
        error: '#E21F18',
        button: {
            text: '#FDFDFD',
            background: '#128659',
            hover: {
                text: '#FDFDFD',
                background: '#18B77A'
            }
        },
        input: {
            text: '#707070',
            background: '#FDFDFD',
            hover: {
                text: '#FDFDFD',
                background: '#18B77A'
            }
        },
        select: {
            text: '#707070',
            background: '#FDFDFD',
            hover: {
                text: '#FDFDFD',
                background: '#18B77A'
            },
            focus: {
                text: '#707070',
                background: '#FDFDFD'
            }
        },
        border: '#707070'
    },

    fonts: {
        family: 'Arial, sans-serif',
        sizes: {
            small: '13px',
            medium: '16px',
            large: '28px'
        }
    },

    widths: {
        content: '340px',
        input: '100%',
        button: '125px',
    },

    heights: {
        input: 'auto',
        button: '40px',
        checkbox: '30px',
    },

    paddings: {
        input: { t: '17px', b: '17px', l:'15px', r: '15px' },
        button: { t: '10px', b: '10px', l:'10px', r: '10px' }
    },

    spacing: {
        small: '10px',
        medium: '18px',
        large: '30px'
    },

    borders: {
        radius: '5px',
        width: '1px'
    }
};

export const darkTheme: Theme = {
    ...lightTheme,
    colors: {
        background: '#1C1B22',
        text: '#FDFDFD',
        error: '#E21F18',
        button: {
            text: '#FDFDFD',
            background: '#18B77A',
            hover: {
                text: '#FDFDFD',
                background: '#128659'
            }
        },
        input: {
            text: '#FDFDFD',
            background: '#1C1B22',
            hover: {
                text: '#FDFDFD',
                background: '#128659'
            }
        },
        select: {
            text: '#FDFDFD',
            background: '#1C1B22',
            hover: {
                text: '#FDFDFD',
                background: '#128659'
            },
            focus: {
                text: '#707070',
                background: '#1C1B22'
            }
        },

        border: '#FDFDFD'
    }
};