import { products } from "@prisma/client";

export type Products = Omit<products, 'id'>;


export const productsList: Products[] = [
    {
        name: 'Iogurte Sabor Morango',
        price: 7.00,
        barcode: 'ebgvvbt5445',
        picture_url: 'https://static.paodeacucar.com/img/uploads/1/676/677676.png',
        product_type_id: 1
    },
    {
        name: 'Detergente Neutro',
        price: 4.60,
        barcode: 'cdscfewvgv',
        picture_url: 'https://images.tcdn.com.br/img/img_prod/847608/detergente_liquido_clear_ype_500ml_4773_1_d08d46a82a496cb0053b5c424727c41c.jpg',
        product_type_id: 2
    },
    {
        name: 'Coca-Cola 2L',
        price: 9.29,
        barcode: 'dcvdfvrg34tg',
        picture_url: 'https://static.paodeacucar.com/img/uploads/1/643/20247643.jpg',
        product_type_id: 3
    },
    {
        name: 'Fanta Uva 1L',
        price: 5.49,
        barcode: 'hgmjyuj6yuy54',
        picture_url: 'https://www.extrabom.com.br/uploads/produtos/350x350/5030_20170619125527_thumb_5030_RefrigeranteFantaUva1_5L.jpg',
        product_type_id: 3
    },

    {
        name: 'Skol Pilsen pacote com 12un',
        price: 33.00,
        barcode: '234346gbhrh',
        picture_url: 'https://cf.shopee.com.br/file/8945dcdc9dfea9ab48bf0ebd75dcf319',
        product_type_id: 3
    },

    {
        name: 'Água Sanitária Suprema 2 Litros',
        price: 5.17,
        barcode: 'bgbrh5y6',
        picture_url: 'https://images.tcdn.com.br/img/img_prod/1043708/agua_sanitaria_suprema_2_litros_35_1_da9cf8e42a0ab255a28af564a600c11e.png',
        product_type_id: 2
    },

    {
        name: 'Desinfetante Bak YPÊ Lavanda 5 Litros',
        price: 27.89,
        barcode: 'htyh657656',
        picture_url: 'https://castronaves.vteximg.com.br/arquivos/ids/371240-1000-1000/10524_01.jpg?v=637655839188170000',
        product_type_id: 2
    },

    {
        name: 'Sabão Glicerinado Ypê Neutro',
        price: 12.45,
        barcode: 'vfggfhbty67',
        picture_url: 'https://www.drogarianet.com.br/media/product/4a7/sabao-glicerinado-ype-neutro-c-05-4e7.jpg',
        product_type_id: 2
    },
];