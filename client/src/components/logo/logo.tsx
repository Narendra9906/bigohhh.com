import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick = {onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
      <a href="https://www.bigohhh.com/" style={{ textDecoration: 'none' }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      > 
        Big<span>Ohhh</span>
      </Typography>        
      </a>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
