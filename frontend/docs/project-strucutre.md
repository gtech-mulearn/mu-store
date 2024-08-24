
# Project Structure

## Overview

This document provides an overview of the folder structure used in this React project. The goal is to organize the codebase in a way that is scalable, maintainable, and easy to navigate.

## Structure

```dir
├── public
│   ├── fonts
│   ├── images
│   ├──   ├── general
│   ├──   └── [...page]
│   └── locale
├── src
│   ├── context
│   ├── component
│   ├──   ├── general
│   ├──   └── [...page]
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├──   └── [...page]
│   ├── services
│   ├── types
│   └──   └── [...page].d.ts
│   └── utils
└── App.css
└── App.tsx
```

### 1. [`public/`](../public/)

The `public` directory contains static assets that are served directly by the server.

- **`images/`**: Contains image files used in the application.
  - **`general/`**: Stores images that are shared between multiple pages.
  - **`SignIn/`**: Contains images specific to the SignIn page. Similar folders will be created for other pages as needed.
- **`fonts/`**: Holds custom fonts used in the project.
- **`locale/`**: Stores localization files for internationalization (i18n) support.

#### 1.1 [`images/`](../public/images/)

This folder contains reusable components that can be used throughout the application.

- [**`general/`**](../public/images/general/): Images that are shared across multiple pages.
- **`[...page]/`**: Contains images specific to the page.

-**Example:**

```
 images
 ├── general
 ├── signIn // signIn page images in this folder
 └── ...similarly for other pages

```

### 2. `src/`

The `src` directory contains the source code of the application.

```
├── src
│   ├── context
│   ├──   ├── general
│   ├──   └── [...page]
│   ├── component
│   ├──   ├── general
│   ├──   └── [...page]
│   ├── hooks
│   ├──   ├── general
│   ├──   └── [...page]
│   ├── services
│   ├──   ├── general
│   ├──   └── [...page]
│   ├── types
│   ├──   ├── general
│   └──   └── [...page].d.ts
│   └── utils
│   ├──   ├── general
│   └──   └── [...page]
└── ....
```

- **`general/`**: `Item` that are shared across multiple pages.
- **`[page]/`**: Contains `Item` specific to the page.

-**Example:**

```
 component
 ├── general
 ├── signIn // signIn page images in this folder
 ├── home // home page images in this folder
 └── ...similarly for other pages

```

#### 2.1 [`context/`](../src/context/)

This folder is for managing global state using React Context. It contains files that set up contexts and providers for sharing state across the app.

#### 2.2 [`component/`](../src/component/)

This folder contains reusable components that can be used throughout the application.

#### 2.3 [`hooks/`](../src/hooks/)

Custom React hooks are stored here. Hooks encapsulate reusable logic that can be shared across multiple components.

#### 2.4 [`layouts/`](../src/layouts/)

This folder contains layout components that define the structure of pages, such as headers, footers, and wrappers.

#### 2.5 [`pages/`](../src/pages/)

This folder contains components that represent different pages or views in the application.

-**Example:**

```
 pages/
 ├── signIn // signIn page view component in this folder
 ├── main // main page view components in this folder
 ├── notFound // main page view components in this folder
 ├── profile // main page view components in this folder
 └── ...similarly for other pages

```

#### 2.6 [`services/`](../src/services/)

This folder is for services that handle data fetching, authentication, and other business logic that can be shared across the application.

##### `services` Folder

- **API clients:** Axios, Fetch API, or custom implementations for interacting with external APIs.

- **Data management:** Functions for fetching, storing, and updating data (e.g., using Redux, Context API, or custom state management solutions).
- **Authentication and authorization:** Logic for handling user authentication and authorization (e.g., using JWT tokens or OAuth).
- **Error handling:** Centralized error handling functions or classes.
- **Third-party integrations:** Functions for integrating with external services (e.g., payment gateways, analytics tools).

**Example:**

```
src/
  services/
    authService.js
    dataService.js
    paymentService.js
```

**Note:** The specific contents of these folders will vary depending on the project's requirements and architecture. The goal is to organize code in a way that is logical, reusable, and maintainable.

#### 2.7 [`types/`](../src/types/)

This folder contains TypeScript type definitions, interfaces, and types used across the project
-

**Example:**

```
 types
 ├── general
 ├──   ├── user.d.ts
 ├──   ├── project.d.ts
 ├──   └── ... types shared between other pages
 ├── signIn.d.ts // types for signIn page 
 ├── home.d.ts // types for home page
 └── ...similarly for other pages
```

#### 2.8 [`utils/`](../src/utils/)

This folder contains utility functions and helpers that are used across the application.

##### `utils` Folder

- **Utility functions:** General-purpose functions for common tasks like formatting data, validating inputs, or handling browser features.

- **Custom hooks:** Reusable React hooks for encapsulating common logic.
- **Constants:** Centralized constants or configuration values.
- **Helpers:** Functions or classes that assist in specific tasks, such as handling form submissions or managing local storage.
- **Testing helpers:** Functions or utilities used for testing, like mocking or testing data generation.

```
src/
  services/
    authService.js
    dataService.js
    paymentService.js
  utils/
    formatters.js
    validators.js
    constants.js
    customHook.js
```

### 3. Root Files

- [**`App.css`**](../src/App.css): Contains global styles for the application.
- [**`App.tsx`**](../src/App.tsx): The root component that sets up the basic structure of the application.

## Best Practices

- **Component Reusability**: Aim to create small, reusable components to reduce duplication.
- **Separation of Concerns**: Keep logic, styles, and component structure separated for easier maintenance.
- **Consistency**: Follow consistent naming conventions and folder structures throughout the project.
