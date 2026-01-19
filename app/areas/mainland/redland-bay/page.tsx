import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import RedlandBayContent from './RedlandBayContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Redland Bay - Gateway to the Bay Islands',
  description:
    'Redland Bay is the ferry gateway to the Southern Moreton Bay Islands. Home to the marina, boat ramps, shopping, cafes, and mainland services for island residents. Population 15,000.',
  keywords: [
    'Redland Bay',
    'Redland Bay Marina',
    'Redland Bay ferry terminal',
    'Redland Bay Queensland',
    'Redland Bay shopping',
    'gateway to islands',
    'SMBI mainland',
    'island ferry access'
  ],
});

export default function RedlandBayPage() {
  return <RedlandBayContent />;
}
