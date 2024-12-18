import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
  test('renders the header with a home link', () => {
    render(<Header />);
    
    // Check if the Home link is in the document and has the correct href
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('renders the FAQ link', () => {
    render(<Header />);
    
    // Check if the FAQ link is in the document
    const faqLink = screen.getByRole('link', { name: /faq/i });
    expect(faqLink).toBeInTheDocument();
    expect(faqLink).toHaveAttribute('href', '/faq');
  });

  test('renders external links for X (formerly Twitter) and LinkedIn', () => {
    render(<Header />);
    
    // Check if the X (formerly Twitter) link is in the document
    const twitterLink = screen.getByRole('link', { name: /x\(formerly twitter\)/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://x.com/grimmapp');
    expect(twitterLink).toHaveAttribute('target', '_blank');
    
    // Check if the LinkedIn link is in the document
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/company/grimm');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  test('renders the logo as a link', () => {
    render(<Header />);
    
    // Check if the logo link is in the document
    const logoLink = screen.getByRole('link', { name: /home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
