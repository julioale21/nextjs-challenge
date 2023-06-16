'use client';
import React from 'react';

import { MarkdownRenderer } from '@/components/react-markdown/MarkdownRender';

import { markdown } from '../../constants/about';
import { Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <Stack>
        <MarkdownRenderer content={markdown} />
    </Stack>
  )
}

export default About 