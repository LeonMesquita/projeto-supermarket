import { product_types } from "@prisma/client";

export type ProductType = Omit<product_types, 'id'>


export const productTypes: ProductType[] = [
    {
        name: 'Lacticínios',
        picture_url: 'https://st.depositphotos.com/1063437/1909/i/600/depositphotos_19096273-stock-photo-shopping-basket-with-detergent-bottles.jpg'
    },
    {
        name: 'Limpeza',
        picture_url: 'https://st.depositphotos.com/1063437/1909/i/600/depositphotos_19096273-stock-photo-shopping-basket-with-detergent-bottles.jpg'
    },
    {
        name: 'Bebidas',
        picture_url: 'https://files.cercomp.ufg.br/weby/up/72/o/13.jpeg?1593132682'
    },
    {
        name: 'Carnes',
        picture_url: 'https://www.infoescola.com/wp-content/uploads/2011/02/carne-vermelha.jpg'
    },
    {
        name: 'Hortifruti',
        picture_url: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11274/slide/alimentacao-cursos-cpt_frutas_2.jpg'
    },
    {
        name: 'Higiene',
        picture_url: 'https://www.incqs.fiocruz.br/images/stories/incqs/2018_11_21_produtos.jpg'
    },
]
