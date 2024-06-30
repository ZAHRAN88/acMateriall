import { Checkbox } from '@mui/material'
import React from 'react'

const CheckButton = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <div>
      <Checkbox {...label}  color="success" />
    </div>
  )
}

export default CheckButton
