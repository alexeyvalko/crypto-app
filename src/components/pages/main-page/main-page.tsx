import { Section } from '@/components/section';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

export const MainPage = () => {
  return (
    <Section className="mt-6">
      <Carousel className="pl-12 pr-12">
        <CarouselPrevious className="left-0" />
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">GALA</CardTitle>
              </CardHeader>
              <CardContent>$0.05547 28.8%</CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">GALA3</CardTitle>
              </CardHeader>
              <CardContent>$0.05547 28.8%</CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">GALA5</CardTitle>
              </CardHeader>
              <CardContent>$0.05547 28.8%</CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <CarouselNext className="right-0" />
      </Carousel>
    </Section>
  );
};
