import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import ClevelandContent from './ClevelandContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cleveland - Redlands CBD & Government Services',
  description:
    'Cleveland is the Redlands CBD with Redland City Council, Redland Hospital, government services, schools, and waterfront dining. Major mainland hub for Bay Islands residents. Population 13,500.',
  keywords: [
    'Cleveland',
    'Cleveland Queensland',
    'Redland City Council',
    'Redland Hospital',
    'Cleveland CBD',
    'Cleveland State High School',
    'Redlands government services',
    'Cleveland waterfront'
  ],
});

export default function ClevelandPage() {
  return <ClevelandContent />;
}
