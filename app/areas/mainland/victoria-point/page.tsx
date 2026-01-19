import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import VictoriaPointContent from './VictoriaPointContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Victoria Point - Major Shopping & Services Hub',
  description:
    'Victoria Point is a major Redlands shopping and services hub with Woolworths, medical centres, restaurants, and transit connections. Key mainland suburb for Bay Islands residents. Population 14,000.',
  keywords: [
    'Victoria Point',
    'Victoria Point shopping',
    'Victoria Point Queensland',
    'Lakeside shopping centre',
    'Victoria Point medical',
    'Redlands shopping',
    'mainland services SMBI',
    'Victoria Point High School'
  ],
});

export default function VictoriaPointPage() {
  return <VictoriaPointContent />;
}
