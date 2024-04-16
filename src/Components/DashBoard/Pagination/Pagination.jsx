import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({page,handleChange}) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={(e,v)=>handleChange(e,v)} />
    </Stack>
  );
}