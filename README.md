# @kimskovhusandersen/ui-library

**@kimskovhusandersen/ui-library** is a React interface library that seamlessly integrates Tailwind CSS, Vite, TypeScript, and Radix UI and Shadcn UI components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can easily install **@kimskovhusandersen/ui-library** using your preferred package manager:

```bash
# Using npm
npm install @kimskovhusandersen/ui-library

# Using yarn
yarn add @kimskovhusandersen/ui-library
```

## Usage

Integrate @kimskovhusandersen/ui-library into your React application to take advantage of its Radix UI and Shadcn UI components. Here's an example of how to use the components in your React code:

```typescript

import React from 'react';
import { Avatar, Button } from '@kimskovhusandersen/ui-library';

function App() {
  return (
    <>
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      >
        FM
      </Avatar>
      <Button variant="default" size="md">Label</Button>
    </>
  );
  );
}

export default App;
```

## Contributing

We welcome contributions to @kimskovhusandersen/ui-library! If you'd like to contribute, please follow these guidelines:

Fork the repository on GitHub.
Clone your forked repository and set it up as described in the Installation section.
Create a new branch for your feature or bug fix.
Make your changes and test them.
Submit a pull request to the main repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

We would like to express our gratitude to the creators of Radix UI and Shadcn UI for their outstanding work and open-source contributions. This project would not be possible without their support and fantastic components.
