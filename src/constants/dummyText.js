import { COLORS } from "./colors";

export const DummyText = {
	Selección_de: "Selección de idioma",
	idioma: "idioma",
	Seleccionado_por_defecto: "Seleccionado por defecto",
	En_qué_idioma_quieres_ver: " En qué idioma quieres ver",
	Shopy: "Shopy?",
	Omitir_seleccionar_más_tarde: "Omitir, seleccionar más tarde...",
	Iniciar_sesión: " Iniciar sesión",
	para_empezar: " para empezar",
	Iniciar_sesión_con_número_de_teléfono:
		"Iniciar sesión con número de teléfono",
	Iniciar_electrónico: "Iniciar sesión con ID de correo electrónico",
	Continuar: "Continuar",
	Al_continuar_aceptas_los_Shopy: "Al continuar, aceptas los Shopy",
	Terms_of_Use_and_Privacy_Policy: " Terms of Use  and  Privacy Policy",
	// HOme Screen Txt
	Ventas_calientes: "Ventas calientes",
	ver_más: "ver más",
	Mejor_vendedora: "Mejor vendedora",
	Supermonedas: "Supermonedas",
	Próxima_generación_Marcas: "Próxima generación_Marcas",
	Crédito: "Crédito",
	Tienda_en_vivo: "Tienda en vivo+",
	EMI: "EMI",

	// Cat TXT
	Camisetas_de_hombre: "Camisetas de hombre",
	Ordenar_por: "Ordenar por",
	Filtrar: "Filtrar",
	Precio: "Precio",
	Marca: "Marca",
	Venta: "Venta",

	//Product Details
	Camisetas_de_hombre: "Camisetas de hombre",
	Estilo_Espectáculo: "Estilo Espectáculo",
	añadir_a_la_cesta: "añadir a la cesta",
	Comprar_ahora: "Comprar ahora",
	Descripción:"Descripción:",
	Reseñas:"Reseñas:",
	loreIpsum:
		"Lorem ipsum dolor sit amet consectetur. Fusce sed sit elementum elementum. Convallis amet sapien suspendisse lectus tristique et. Tellus commodo morbi quisque amet."
,
	// Product VIdeo 
	Productos_vivos:"Productos vivos",

	//OrderDetails01
	Mi_carrito:"Mi carrito",
	Más_productos_similares:"Más productos similares",
	Entregar_a:"Entregar a:",
	Agregar_nueva_dirección:"Agregar nueva dirección",
	All_Other_Payment_Options:"All Other Payment Options"
	
};


export const CarDate=[
	{
		id:1,
		title1:"Terminado",
		 title2:"Entrega",
		 imageUri:require("../assets/Images/heart.png"),
		 price:15,
		 bgColor:COLORS.secoundry,
		
	},{
		id:2,
		title1:"Pendiente",
		 title2:"Entrega",
		 imageUri:require("../assets/Images/clock.png"),
		 price:1108,
		 bgColor:COLORS.white,
		 marginTop:10

	},{
		id:3,
		title1:"Total",
		 title2:"Recogida",
		 imageUri:require("../assets/Images/record.png"),
		 price:500,
		 bgColor:COLORS.white,
		

	},{
		id:4,
		title1:"Total",
		 title2:"Ganancias",
		 imageUri:require("../assets/Images/usemobile.png"),
		 price:80,
		 bgColor:COLORS.secoundry,
		 marginTop:10

	}
]


export const AffiliateMarketingData=[
	{
		id:1,
		title1:"TOTAL",
		 title2:"REFERENCIAS",
		 imageUri:require("../assets/Images/bgimg_1.png"),
		 price:15,
		 bgColor:"#9593FF",
		 txtColor:"#1B1A68",
		 
	},{
		id:2,
		title1:"TOTAL",
		 title2:"COMPRAS",
		 imageUri:require("../assets/Images/bgimg_2.png"),
		 price:1108,
		 bgColor:"#83DC7B",
		 txtColor:"#197311",
	},{
		id:3,
		title1:"REFERRALS",
		 title2:"ESTE MES",
		 imageUri:require("../assets/Images/bgimg_3.png"),
		 price:500,
		 bgColor:"#E49B83",
		 txtColor:"#8A3A1F",
	},{
		id:4,
		title1:"COMPRAS",
		 title2:"ESTE MES",
		 imageUri:require("../assets/Images/bgimg_4.png"),
		 price:80,
		 bgColor:"#BD8EE2",
		 txtColor:"#4B2569",
	}
]


export const SocialIcons = [
	{ id: 1, iconUri: require("../assets/icons/facebook.png") },
	{ id: 2, iconUri: require("../assets/icons/innstagram.png") },
	{ id: 3, iconUri: require("../assets/icons/sendIcon.png") },

	{ id: 4, iconUri: require("../assets/icons/twiiter.png") },
	{ id: 5, iconUri: require("../assets/icons/whatsapp.png") }

];



export const CategroiesIconn = [
	{ id: 1,title:"Supermonedas", iconUri: require("../assets/icons/firstIcon.png") },
	{ id: 2,title:"Próxima generación Marcas", iconUri: require("../assets/icons/secoundIcon.png") },
	{ id: 3,title:"Crédito", iconUri: require("../assets/icons/thridIcon.png") },
	{ id: 4,title:"Tienda en vivo+", iconUri: require("../assets/icons/fourthIcon.png") },
	{ id: 5,title:"EMI", iconUri: require("../assets/icons/fifthIcon.png") }
];



export const DrawerIcon=[
	{
		id:1,
		iconUri:require("../assets/icons/home.png"),
		title:"Dashboard",
	},{
		id:2,
		iconUri:require("../assets/icons/brokenHeart.png"),
		title:"Entrega Completada",
	},{
		id:3,
		iconUri:require("../assets/icons/alarmClock.png"),
		title:"Entrega pendiente",
		number:5
	},{
		id:4,
		iconUri:require("../assets/icons/arrow.png"),
		title:"Entrega cancelada",
		number:1,
	},{
		id:5,
		iconUri:require("../assets/icons/cashHand.png"),
		title:"Mi colección",
	},{
		id:6,
		iconUri:require("../assets/icons/profile1.png"),
		title:"Mi perfil",
	},{
		id:7,
		iconUri:require("../assets/icons/loader.png"),
		title:"Cerrar sesión",
	},
	
]

