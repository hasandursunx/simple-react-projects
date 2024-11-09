import React, { useEffect } from 'react'
import { MenuItem, TextField, ThemeProvider, createTheme } from '@mui/material'
import categories from '../../data/category'
const Header = ({ category, setCategory, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff',
            }
        },
    });
    useEffect(() => {
        console.log(category)
    }, [category]);

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }
    return (
        <div div className='header' >
            <span className='title '>{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className='search'
                        label="Search a Word"
                        id="standard-basic"
                        variant="standard"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className='select'
                        id="standard-select-currency"
                        select
                        defaultValue={category}
                        onChange={(e) => handleChange(e.target.value)}
                        label="Language"
                        variant="standard"
                    >
                        {categories.map((option) => (
                            <MenuItem
                                key={option.label}
                                value={option.label}
                            >{option.value}</MenuItem>
                        ))}

                    </TextField>
                </ThemeProvider>
            </div>
        </div >
    )
}

export default Header