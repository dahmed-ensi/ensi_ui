import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
      return <img {...props} />; // Mock it as a simple img tag
    },
  }));