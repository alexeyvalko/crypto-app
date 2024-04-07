import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const AboutPage = () => {
  return (
    <Section>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl inline mt-0"> Used resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ol>
            <li>
              <a href="https://react.dev/" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                ReactJS
              </a>{' '}
              - A popular JavaScript library for building user interfaces
            </li>
            <li>
              <a href="https://ui.shadcn.com/docs" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                Shadcn/ui
              </a>{' '}
              - a collection of re-usable components.
            </li>
            <li>
              <a
                href="https://www.coingecko.com/en/api/documentation"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coingecko API
              </a>{' '}
              - The largest source of cryptocurrency data.
            </li>
            <li>
              <a
                href="TheNewsAPI - Worldwide news and top stories from over 40,000 sources in 50+ countries."
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                TheNewsAPI
              </a>{' '}
              - Worldwide news and top stories from over 40,000 sources in 50+ countries.
            </li>
          </ol>
        </CardContent>
      </Card>
    </Section>
  );
};
