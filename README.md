# Lumicore Frontend

A modern React/Next.js frontend application for data batch processing, normalization, and validation. This application allows users to fetch raw data, normalize and clean it, and submit processed batches with quality scoring.

## Project Overview

Lumicore Frontend is built with:
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **React Query (TanStack Query)** - Server state management
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations

## Features

- **Batch Processing**: Fetch and process data batches from backend
- **Data Normalization**: Automatically normalize raw data into structured format
- **Data Cleaning**: Edit and clean individual data fields
- **Validation**: Automatic field validation for data quality
- **Quality Scoring**: Get quality scores for submitted batches
- **Real-time Updates**: Live field editing with instant validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository
    ```bash 
    git clone https://github.com/mahnoorkhan2340/lumicore-frontend.git 

    ```
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build & Production

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Environment Variables

Configure the following environment variables in `.env.example`:

```
NEXT_PUBLIC_BACKEND_URL=<backend-api-url>
```

## API Endpoints

The application communicates with the backend via these endpoints:

- `GET /api/data` - Fetch raw batch data
- `POST /api/normalize` - Normalize raw data
- `POST /api/submit` - Submit processed batch

## Key Components

### BatchControl
Manages batch selection and triggers data fetching workflow.

### CleanedTable
Displays normalized data in editable table format with real-time validation.

### RawDataPanel
Shows raw, unprocessed data before normalization.

### ScoreSection
Displays quality score after batch submission.

### DataPanels
Contains auxiliary data visualization panels.

## Custom Hooks

### useBatch
Handles fetching batch data from the backend using React Query.

### useNormalizeData
Mutation hook for normalizing raw data into structured format.

### useSubmitBatch
Mutation hook for submitting processed batches and receiving quality scores.

## Technologies Used

- **React 19** - UI library
- **Next.js 16** - React framework
- **TypeScript 5** - Type safety
- **TanStack React Query 5** - Data fetching
- **Axios** - HTTP requests
- **Tailwind CSS 4** - Styling
- **PostCSS 8** - CSS processing
- **ESLint 9** - Code linting

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
