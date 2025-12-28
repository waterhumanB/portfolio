'use client';

import { Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { careerHistory } from '../data/career';

export default function CareerSection() {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      py: 10,
      px: 2
    }}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 8 }}>
        Career
      </Typography>

      <Timeline position="alternate">
        {careerHistory.map((career, index) => (
          <TimelineItem key={career.id}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: 'white',
                  boxShadow: 'none',
                }}
              />
              {index < careerHistory.length - 1 && (
                <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
              )}
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                {career.company}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                {career.period}
              </Typography>
              <Typography variant="body1">{career.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
