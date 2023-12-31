"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "flavours",
      [
        {
          id: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          type: "FRUTALES",
          name: "FRUTILLA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          type: "FRUTALES",
          name: "MARACUYA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "2e0425ba-11c6-440a-ab99-e8b89ed2da82",
          type: "FRUTALES",
          name: "UVA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "36899528-6036-4867-944c-d2329965cc0e",
          type: "FRUTALES",
          name: "MANGO",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "5e508056-ec18-4bfa-b8d5-eafdda03d096",
          type: "FRUTALES",
          name: "MANZANA VERDE",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "d5fd8003-30a4-4f08-8f22-efbfba84b70b",
          type: "FRUTALES",
          name: "PAY DE LIMON",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "12ebf76a-3adc-408e-b791-377edb3cc7f3",
          type: "FRUTALES",
          name: "BANANA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "20a2cb80-1b17-45ae-bdec-916351447f65",
          type: "ESPECIALES",
          name: "OREO",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "f2c39e73-cbfc-4003-a22f-debc4ae22875",
          type: "ESPECIALES",
          name: "CAFE",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "0362d6e8-fd2b-435a-bcb4-9dd977441af6",
          type: "ESPECIALES",
          name: "CHOCOLATE",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "030bdc15-ce7c-4768-b8d3-12176e99cab2",
          type: "ESPECIALES",
          name: "MONSTER",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "2edc15da-e1c3-493c-b4b5-0dcf91a2da2e",
          type: "ESPECIALES",
          name: "CHICLE",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "f3011a95-2e92-4737-92cf-8645f6bc9243",
          type: "ESPECIALES",
          name: "KIWI",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "3e66cd05-95ab-47b4-b94d-d31d6097642a",
          type: "ESPECIALES",
          name: "TAPIOCA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: -1,
        },
        {
          id: "d8e30303-54cd-40fa-868a-d4c99746bdb8",
          type: "DE LA CASA",
          name: "FRAMBUESA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "cb2a8fb5-e0ac-4025-996d-a927eeacfc8c",
          type: "DE LA CASA",
          name: "MANZANA VERDE",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "845b62d9-2fc8-49c2-94f6-39b5db8d73fc",
          type: "DE LA CASA",
          name: "FRUTILLA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "9a5ab53b-5ce1-43f5-81d4-923dbaf63ac5",
          type: "DE LA CASA",
          name: "UVA",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "e0d2c344-f340-4199-b8df-f16dbaa281ac",
          type: "DE LA CASA",
          name: "MANGO",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "026e4746-2b24-4013-bb96-7fcc652ce23c",
          type: "DE LA CASA",
          name: "DURAZNO",
          idMenu: "84280cbb-57c2-4806-a3ea-7f81848efdbf",
          price: 0,
        },
        {
          id: "62c42e6d-5c4c-4416-8647-c5d455adaa7b",
          type: "FRUTALES",
          name: "FRUTILLA",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "224f75de-394c-4ef3-8d4a-76d431ed6e91",
          type: "FRUTALES",
          name: "BANANA",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "b723741a-9ff4-417e-99f1-f38e1acfe6d1",
          type: "FRUTALES",
          name: "ARANDANO",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "9f2441c7-ad22-4c06-b194-b33f1fdc8d66",
          type: "FRUTALES",
          name: "DURAZNO",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "a7571e7c-336e-49e4-ab21-22634c54c60f",
          type: "CUBIERTA",
          name: "JARABE DE CHOCOLATE",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "7ba3b5ec-ff49-420d-a510-ac2d07c7f217",
          type: "CUBIERTA",
          name: "NUTELLA",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "d753e4a9-9e7b-4b94-870f-51f98b7b9f97",
          type: "CUBIERTA",
          name: "JARABE DE FRUTILLA",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "53f0e1ba-5137-4249-9711-58158f2c0d7b",
          type: "CUBIERTA",
          name: "DULCE DE LECHE",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 0,
        },
        {
          id: "eb199f40-1182-4510-9b7c-43f2bbed73b1",
          type: "TOPPING",
          name: "CHISPAS DE CHOCOLATE",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 2,
        },
        {
          id: "5388c452-09b5-4f08-89c4-20bcd2e16e8e",
          type: "TOPPING",
          name: "CHISPAS DE CHOCOLATE BLANCO",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 2,
        },
        {
          id: "f14879b4-506d-4de9-8634-cd95db446b44",
          type: "TOPPING",
          name: "OREO",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 2,
        },
        {
          id: "2f8f6eb3-6f6e-47db-90e6-2fb06c3a5670",
          type: "TOPPING",
          name: "GALLETAS MABEL",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 2,
        },
        {
          id: "d7ad95d1-a1ec-456f-9493-d5075093b48d",
          type: "TOPPING",
          name: "CREMA BATIDA",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 2,
        },
        {
          id: "950369b5-71f9-4b7c-bf8a-406123f90751",
          type: "TOPPING",
          name: "BON O BON",
          idMenu: "369bf017-c1e5-4e5c-98ae-1185b21e53bf",
          price: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("flavours", null, {});
  },
};
