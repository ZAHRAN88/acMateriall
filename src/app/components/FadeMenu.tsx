import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from 'next/link';
interface FadeMenuProps {
    label: string
    items?: {
        label: string
        href: string
    }[]
    
}
 const FadeMenu:React.FC<FadeMenuProps>=({label,items})=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
        
      >
        {label}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className='mt-2'
      >
     {
            items?.map((item,index)=>(
                <MenuItem key={index} onClick={handleClose}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </MenuItem>
            ))
     }
        
      </Menu>
    </div>
  );
}
export default FadeMenu