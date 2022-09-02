import { Box, SimpleGrid } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { BaseContent } from "../components/BaseContent";
import { Banner } from "../components/Continentes/Banner";
import { Card } from "../components/Continentes/Card";
import { Section } from "../components/Continentes/Section";
import { SectionTitle } from "../components/Continentes/SectionTitle";
import { Layout } from "../components/Layout";

import { api } from "../services/api";

interface Continent {
  data: {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }
}

interface Cidades {
  id: number;
  cidade: string;
  pais: string;
  image: string;
  imageBandeira: string;
  continentSlug: string;
}

type Props = {
  continent: Continent
  cidades: Cidades[]
}

export default function Continent({ continent, cidades }: Props) {
  return (
    <Layout>
      <Banner title={continent.data.title} image={continent.data.image} />
      <Section description={continent.data.description} />
      <BaseContent>
        <Box>
          <SectionTitle qtdCidadeProps={100} />
        </Box>
        <Box mt={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={10}
          >
            {cidades.map((cidade) => (
              <Card key={cidade.id} {...cidade} />
            ))}
          </SimpleGrid>
        </Box>
      </BaseContent>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await api.get("/continents")
  const paths = res.data.map((user: any) => ({
    params: { slug: user.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const res = await api.get(`/continents/${slug}`)
  const cidadesRes = await api.get(`/continets/${slug}/cidades?continentSlug=${slug}`)
  const cidades = cidadesRes.data


  const continent = {
    data: {
      id: res.data.id,
      slug: res.data.slug,
      title: res.data.title,
      subtitle: res.data.subtitle,
      description: res.data.description,
      image: res.data.image
    }
  }

  return {
    props: {
      continent,
      cidades
    }
  }
}