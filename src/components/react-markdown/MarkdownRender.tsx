/* eslint-disable*/

import React from 'react';

import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from "@chakra-ui/react";


interface MarkdownRendererProps {
    content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
      <Box maxW={800} marginX="auto">
        <ReactMarkdown
          children={content}
          components={{
            h1: ({ node, ...props }) => <Heading as="h1" {...props} />,
            h2: ({ node, ...props }) => <Heading as="h2" {...props} />,
            h3: ({ node, ...props }) => <Heading as="h3" {...props} />,
            p: ({ node, ...props }) => <Text {...props} />,
          }}
        />
      </Box>
    );
  };

export { MarkdownRenderer }
  