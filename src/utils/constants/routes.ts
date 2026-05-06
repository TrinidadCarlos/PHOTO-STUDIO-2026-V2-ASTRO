export type ServicesTypes = 'Bodas' | 'Eventos religiosos' | 'Familia' | 'Negocio' | 'Eventos' | 'Maternidad' | 'Parejas' | 'Mascotas' | 'Estudio' | 'Exteriores';
export type MenuTypes = 'Inicio' | 'Sesiones' | 'Galería' | 'Contáctanos/Reserva' | 'Comentarios';

export interface SubRoutes {
    name: string; // ESTO DA NOMBRE A TABS EN PÁGINAS DE /services/route...
    path: string;
    show: boolean;
}

export interface RoutesI {
    name: ServicesTypes; //nombre que se muestra (servicio)
    path: string; // /ruta
    showGallery?: boolean; // para mostrar o no esta opción o servicio en la galería
    show: boolean; // para mostrar o no esta ruta en algún menu etc
    imgName?: string | null; //ruta de imagen ilustrativa relacionada a la ruta (la uso en el sitio en caso de services)
    subRoutes?: SubRoutes[]; // esto se va a usar para los params en los servicios/sesiones para los tabs más que nada
}

export interface RouterI {
    section: MenuTypes;//nombre que se muestra en el menú
    basePath: '/' | '/services' | '/gallery' | '/contact-booking' | '/reviews';
    type: 'link' | 'box' | 'dropdown' | 'boxList'; //esto poque uso mi menu personalizado
    containerClass?: string; // para casos de box o drop, esta clase da estilos a su contenedor
    illustration?: string; // src para el caso de que sean box se agrega una imagen ilustrativa al contenedor
    routes: RoutesI[];
}

export const routes: RouterI[] = [
    {
        section: "Inicio",
        basePath: "/",
        type: "link",
        routes: []
        // routes: [{ name: "Inicio", path: "", show: true, imgName: null }],
    },
    {
        section: "Sesiones", // es el texto que se muestra en el menú Header
        basePath: "/services", // es la ruta base de todas las sesiones
        type: "boxList", //tipo de menú
        containerClass: "boxlist-services", // clase para estilos
        illustration: "/img/services-menu.jpg", // imagen ilustrativa
        routes: [
            {
                name: "Bodas", path: "/weddings", show: true, imgName: 'wedding-one', subRoutes: [{
                    name: 'boda', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'boda',
                    show: true
                },
                {
                    name: 'postboda',
                    path: 'postboda',
                    show: true,
                }
                ]
            },
            {
                name: "Eventos religiosos", path: "/religious_events", show: true, imgName: 'religious-one', subRoutes: [{
                    name: 'Primera Comunión', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'primera_comunion',
                    show: true
                },
                {
                    name: 'Bautizo',
                    path: 'bautizo',
                    show: true,
                },
                {
                    name: 'Confirmaciones',
                    path: 'confirmaciones',
                    show: true,
                }
                ]
            },
            {
                name: "Familia", path: "/family", show: true, imgName: 'family-one', subRoutes: [{
                    name: 'Sesión De Estudio', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'studio_session',
                    show: true
                },
                {
                    name: 'Sesión en Exteriores',
                    path: 'outdoor_Session',
                    show: true,
                },
                {
                    name: 'LifeStyle',
                    path: 'LifeStyle',
                    show: true,
                }
                ]
            },
            {
                name: "Negocio", path: "/business", show: false, imgName: 'bussiness-one', subRoutes: [{
                    name: 'Productos e-commerce', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'products',
                    show: true
                },
                {
                    name: 'Instalaciones e Enteriores',
                    path: 'Facilities_and_Interiors',
                    show: true,
                },
                {
                    name: 'Gastronomía',
                    path: 'Gastronomy',
                    show: true,
                }
                ]
            },
            {
                name: "Eventos", path: "/events", show: false, imgName: 'events-one', subRoutes: [{
                    name: 'XV Años', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'xv_party',
                    show: true
                },
                {
                    name: 'Graduación',
                    path: 'graduations',
                    show: true,
                },
                {
                    name: 'Fiestas Infantiles',
                    path: 'birthday parties',
                    show: true,
                }
                ]
            },
            {
                name: "Maternidad", path: "/maternity", show: true, imgName: 'maternity-one', subRoutes: [{
                    name: 'Dulce Espera', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'baby_on_the_board',
                    show: true
                },
                {
                    name: 'Futuros Padres',
                    path: 'Partners',
                    show: true,
                },
                {
                    name: 'Recién Nacido',
                    path: 'newborn',
                    show: true,
                }
                ]
            },
            {
                name: "Parejas", path: "/couples", show: false, imgName: 'couples-one', subRoutes: [{
                    name: 'Aniversarios', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'anniversary',
                    show: true
                },
                {
                    name: 'Cita Urbana',
                    path: 'city_date',
                    show: true,
                },
                {
                    name: 'Temática',
                    path: 'themed',
                    show: true,
                }
                ]
            },
            {
                name: "Mascotas", path: "/pets", show: true, imgName: 'pets-one', subRoutes: [{
                    name: 'Sesión de estudio', // como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'studio_portrait',
                    show: true
                },
                {
                    name: 'Acción en exterior',
                    path: 'outdoor_action',
                    show: true,
                },
                {
                    name: 'Mascota y Dueño',
                    path: 'pet_and_owner',
                    show: true,
                }
                ]
            },
            {
                name: "Estudio", path: "/studio", show: false, imgName: 'studio-one', subRoutes: [
                    {
                        name: 'Sesión de estudio personal',// como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                        path: 'studio_portrait',
                        show: true
                    }
                ]  // show: true/false es para mostrar el elemento en el menu de servicios. NO afecta a la ruta
            },
            {
                name: "Exteriores", path: "/outdoors", show: false, imgName: 'outdoors-four', subRoutes: [
                    {
                        name: 'Sesión en exteriores personal',// como lo voy a usar en params para tabs de services, debe ser exactamente el mismo nombre del path y del label del tab 
                        path: 'outdoors_portrait',
                        show: true
                    }
                ]  // show: true/false es para mostrar el elemento en el menu de servicios. NO afecta a la ruta
            },

        ],
    },
    {
        section: "Galería",
        basePath: "/gallery",
        type: "dropdown",
        containerClass: "box-gallery",
        illustration: "/src/assets/img/generic/gallery-menu.jpg",
        routes: [
            { name: "Bodas", path: "/weddings", show: true, showGallery: true, imgName: 'wedding-one' },
            { name: "Eventos religiosos", path: "/religious_events", show: true, showGallery: true, imgName: 'religious-one' },
            { name: "Familia", path: "/family", show: true, showGallery: true, imgName: 'family-one' },
            { name: "Negocio", path: "/business", show: true, showGallery: true, imgName: 'bussiness-one' },
            { name: "Eventos", path: "/events", show: true, showGallery: true, imgName: 'events-one' },
            { name: "Maternidad", path: "/maternity", show: true, showGallery: true, imgName: 'maternity-one' },
            { name: "Parejas", path: "/couples", show: true, showGallery: true, imgName: 'couples-one' },
            { name: "Mascotas", path: "/pets", show: false, showGallery: true, imgName: 'pets-one' },
            { name: "Estudio", path: "/studio", show: false, showGallery: true, imgName: 'studio-one' },
            { name: "Exteriores", path: "/outdoors", show: false, showGallery: true, imgName: 'outdoors-four' },
        ],
    },
    {
        section: "Contáctanos/Reserva",
        basePath: "/contact-booking",
        type: "link",
        containerClass: '',
        routes: []
    },
    {
        section: "Comentarios",
        basePath: "/reviews",
        type: "link",
        routes: []
    },
];