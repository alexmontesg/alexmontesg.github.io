import { memo } from "react";
import { Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

import HomeSection from "@/components/home/home-section";

function AboutMe() {
  return (
    <HomeSection id="about-me">
      <HomeSection.Heading>More about Me</HomeSection.Heading>
      <HomeSection.Content>
        <Grid templateColumns={{ base: "1fr", md: "2fr 3fr" }} gap={6}>
          <GridItem justifySelf={{ base: "center", md: "start" }}>
            <Image
              src="./about-me.webp"
              loading="lazy"
              rounded="md"
              alt="An image of Alejandro Montes García"
              width={{ base: "300px", md: "400px" }}
              height={{ base: "300px", md: "400px" }}
            />
          </GridItem>
          <GridItem>
            <VStack>
              <Text>
                I've always been drawn to things that pull you into their own
                world. Sometimes that's building software, sometimes it's
                getting lost in a videogame, finding a new place to explore with
                my camera, or opening a booster pack hoping to hit a card I've
                been chasing for months.
              </Text>
              <Text>
                As a fullstack developer, I enjoy building things from start to
                finish and understanding how everything connects behind the
                scenes. I like the mix of creativity and problem solving that
                comes with development, and I'm always looking for ways to
                improve, learn something new, or make things cleaner and simpler
                than before.
              </Text>
              <Text>
                A lot of the things I enjoy outside of tech are the same hobbies
                I grew up with. I collect Pokémon and One Piece cards, watch
                anime, and spend way too many hours playing videogames. I think
                part of why I enjoy all of them so much is the same reason I
                love programming: good worlds, good stories, and the feeling
                that there's always more to discover.
              </Text>
              <Text>
                Traveling and photography have also become a big part of my life
                over the years. I like experiencing new places slowly, walking
                around with a camera, finding small details, and capturing
                moments that would normally go unnoticed.
              </Text>
              <Text>
                And wherever I go, football is always part of my routine. I'm a
                lifelong supporter of Sporting de Gijón, so I've learned how to
                stay loyal through both the good days and the painful ones.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </HomeSection.Content>
    </HomeSection>
  );
}

export default memo(AboutMe);
