'use client';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function ExitPreviewButton() {
  return (
    <Button
      color="error"
      variant="contained"
      size="large"
      sx={{ position: 'fixed', bottom: 10, right: 10, zIndex: 100 }}
    >
      <Link href={`/api/exit-preview`}>Exit Preview</Link>
    </Button>
  );
}
