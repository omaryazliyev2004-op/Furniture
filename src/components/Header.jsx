import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navLinks = ['Home', 'Services', 'Doctors', 'Products', 'Gallery']

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <style>{`
        .nav-link {
          font-size: 14px;
          font-weight: 600;
          color: #333333;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #054C73;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #054C73; }
        .nav-link:hover::after { width: 100%; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

            <header className='w-full bg-white sticky top-0 z-[100] shadow-[0_2px_12px_rgba(0,0,0,0.07)]'>
                <nav className='max-w-[1560px] mx-auto flex items-center justify-between px-[20px] md:px-[120px] h-[72px] md:h-[122px]'>
                    <a href="#">
                        <img src="/images/logo.svg" alt="logo" className='h-[36px] md:h-auto' />
                    </a>

                    <ul className='hidden md:flex items-center gap-[70px] list-none m-0 p-0'>
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className='nav-link'>{link}</a>
                            </li>
                        ))}
                    </ul>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            onClick={() => setOpen(!open)}
                            aria-label="menu"
                            sx={{
                                transition: 'transform 0.3s ease',
                                transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
                            }}
                        >
                            {open ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>
                </nav>

                <Box
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        overflow: 'hidden',
                        maxHeight: open ? '400px' : '0px',
                        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: '#fff',
                        borderTop: open ? '1px solid #f0f0f0' : 'none',
                    }}
                >
                    <List sx={{ px: 2, py: 1 }}>
                        {navLinks.map((link, index) => (
                            <ListItem
                                key={link}
                                disablePadding
                                sx={{
                                    opacity: open ? 1 : 0,
                                    transform: open ? 'translateX(0)' : 'translateX(-20px)',
                                    transition: `all 0.35s ease ${index * 0.07}s`,
                                }}
                            >
                                <ListItemButton
                                    component="a"
                                    href="#"
                                    onClick={() => setOpen(false)}
                                    sx={{
                                        borderRadius: 2,
                                        my: 0.3,
                                        '&:hover': { backgroundColor: '#EEF4FF', color: '#054C73' },
                                    }}
                                >
                                    <ListItemText
                                        primary={link}
                                        primaryTypographyProps={{ fontWeight: 600, fontSize: 15, color: '#333' }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                   
                </Box>
            </header>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.25)',
                        zIndex: 99,
                        backdropFilter: 'blur(2px)',
                        animation: 'fadeIn 0.25s ease',
                    }}
                />
            )}
        </>
    )
}