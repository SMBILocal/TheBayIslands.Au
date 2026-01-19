import { generatePageMetadata } from '@/lib/metadata';
import CapalabaContent from './CapalabaContent';

export const metadata = generatePageMetadata({
  title: 'Capalaba - Major Retail & Entertainment Hub',
  description: 'Capalaba is the Redlands largest shopping and entertainment destination with Capalaba Central, cinemas, restaurants, and services. Key mainland hub for Bay Islands residents. Population 22,000.',
  keywords: [
    'Capalaba',
    'Capalaba Central',
    'Capalaba shopping',
    'Capalaba Queensland',
    'Capalaba Park shopping centre',
    'Redlands shopping',
    'mainland services SMBI',
    'Capalaba cinemas'
  ],
});

export default function CapalabaPage() {
  return <CapalabaContent />;
}
