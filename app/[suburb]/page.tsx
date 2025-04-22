import { Metadata } from 'next';
import SuburbPage from './SuburbPage';

interface Props {
  params: {
    suburb: string;
  };
}

function formatSuburb(suburb: string): string {
  // Decode URI component and handle potential errors
  const decodedSuburb = decodeURIComponent(suburb);
  
  // Capitalize first letter of each word
  return decodedSuburb
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const suburb = formatSuburb(params.suburb);
  
  return {
    title: `HD Trade Services - ${suburb} Plumbing, Gas, Roofing & Air Conditioning`,
    description: `Professional plumbing, gas fitting, roofing and air conditioning services in ${suburb}. 24/7 emergency service available. Licensed and insured.`,
  };
}

export default function Page({ params }: Props) {
  const suburb = formatSuburb(params.suburb);
  return <SuburbPage suburb={suburb} />;
} 