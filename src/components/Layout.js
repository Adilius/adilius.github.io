import { AppBar, Toolbar, Typography, Container, Link as MuiLink} from '@mui/material'
import NextLink from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
            <MuiLink color="inherit" underline="none" sx={{ mr: 2 }}>Home</MuiLink>

            <MuiLink color="inherit" underline="none" sx={{ mr: 2 }}>Blog</MuiLink>

            <MuiLink color="inherit" underline="none">About</MuiLink>

        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  )
}
