import { Box } from '@mui/material';

export default function WavingHand() {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        width: '1.5em',
        height: '1.5em',
        animation: 'wave 2s infinite',
        transformOrigin: '70% 80%',
        '@keyframes wave': {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(18deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '45%': { transform: 'rotate(14deg)' },
          '60%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '100%', height: '100%' }}
      >
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    </Box>
  );
}
