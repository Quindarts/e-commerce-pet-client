export const menuItems = [
    {
        id: 1,
        type: 'left',
        path: '/',
        text: 'HOME',
        icon: 'mingcute:down-small-line',
        submenu: [
            {
                id: 1,
                path: '',
                text: 'HOME 1',
                title: 'HOME',
            },
            {
                id: 2,
                path: '',
                text: 'HOME 2',
                title: 'HOME',
            },
            {
                id: 3,
                path: '',
                text: 'HOME 3',
                title: 'HOME',
            },
        ],
    },
    {
        id: 2,
        type: 'left',
        // path: `${path.ABOUT_US}`,
        text: 'SHOP',
        icon: 'mingcute:down-small-line',
        submenu: [
            {
                id: 1,
                path: '',
                text: 'GRID LAYOUT',
                title: 'SHOP',
            },
            {
                id: 2,
                path: '',
                text: 'PRODUCT LAYOUT',
                title: 'SHOP',
            },
            {
                id: 3,
                path: '',
                text: 'PAGINATION',
                title: 'SHOP',
            },
            {
                id: 4,
                path: '',
                text: 'PRODUCT TYPE',
                title: 'SHOP',
            },
            {
                id: 5,
                path: '',
                text: 'MOBILE SHOP LAYOUT',
                title: 'SHOP',
            },
            {
                id: 6,
                path: '',
                text: 'CATEGORIES',
                title: 'SHOP',
            },
            {
                id: 7,
                path: '',
                text: 'BRANDS',
                title: 'SHOP',
            },
        ],
    },
    {
        id: 3,
        type: 'left',
        // path: `${path.OUR_AGENTS}`,
        text: 'BLOG',
        icon: 'mingcute:down-small-line',
        submenu: [
            {
                id: 1,
                path: '',
                text: 'PORT FORMAT',
                title: 'BLOG',
                subMenu: [
                    {
                        id: 1,
                        text: 'IMAGE',
                        path: '',
                    },
                    {
                        id: 2,
                        text: 'GALLERY',
                        path: '',
                    },
                    {
                        id: 3,
                        text: 'VIDEO',
                        path: '',
                    },
                ],
            },
            {
                id: 2,
                path: '',
                text: 'BLOG STYLE',
                title: 'BLOG',
                subMenu: [
                    {
                        id: 1,
                        text: 'GRID',
                        path: '',
                    },
                    {
                        id: 2,
                        text: 'LIST',
                        path: '',
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        type: 'left',
        // path: `${path.PROPERTIES}`,
        text: 'PAGES',
        icon: 'mingcute:down-small-line',
        submenu: [
            {
                id: 1,
                path: '',
                text: 'ABOUT',
                title: 'PAGE',
            },
            {
                id: 2,
                path: '',
                text: 'CONTACT',
                title: 'PAGE',
            },
            {
                id: 3,
                path: '',
                text: 'FAQ',
                title: 'PAGE',
            },
            {
                id: 4,
                path: '',
                text: 'MAINTENANCE MODE',
                title: 'PAGE',
            },
            {
                id: 5,
                path: '',
                text: '404 ERROR',
                title: 'PAGE',
            },
        ],
    },
    {
        id: 5,
        type: 'right',
        icon: 'charm:mail',
        text: 'info@ricky-shop.com',
    },
    {
        id: 6,
        type: 'right',
        icon: 'lucide:phone',
        text: '+123 488 9652',
    },
    {
        id: 7,
        type: 'right',
        icon: 'grommet-icons:location',
        text: '25 West 21th Street, Miami FL, USA',
    },
    {
        id: 8,
        type: 'right',
        text: 'English',
        submenu: [
            {
                id: 1,
                path: '',
                text: 'ENGLISH',
                title: 'English',
            },
            {
                id: 2,
                path: '',
                text: 'GERMAN',
                title: 'English',
            },
        ],
    },
    {
        id: 9,
        type: 'navigation',
        text: 'DOGS',
        path: '',
        icon: 'streamline:pets-allowed-solid',
        submenu: [
            {
                id: 1,
                text: 'Fresh & Frozen Food',
                path: '',
            },
            {
                id: 2,
                text: 'Toys',
                path: '',
            },
            {
                id: 3,
                text: 'Beds',
                path: '',
            },
            {
                id: 4,
                text: 'Clothes',
                path: 'Grooming',
            },
            {
                id: 5,
                text: 'Trackers',
                path: '',
            },
        ],
        products: [
            {
                id: 1,
                text: 'Frisco Dog Nail Clippers',
                price: 30,
                image: 'https://parkofideas.com/ricky/demo/wp-content/uploads/2022/11/ricky-126-115x115.jpg',
            },
            {
                id: 2,
                text: 'Benebone Fishbone Dog Chew Toy',
                price: 20,
                image: 'https://parkofideas.com/ricky/demo/wp-content/uploads/2022/11/ricky-142-115x115.jpg',
            },
            {
                id: 3,
                text: 'Frisco Cowboy Dog & Cat Costume Hat',
                price: 30,
                image: 'https://parkofideas.com/ricky/demo/wp-content/uploads/2022/11/ricky-132-115x115.jpg',
            },
            {
                id: 1,
                text: 'True Acre Foods Grain',
                price: 30,
                image: 'https://parkofideas.com/ricky/demo/wp-content/uploads/2022/12/ricky-0727047789-115x115.jpg',
            },
        ],
    },
    {
        id: 10,
        type: 'navigation',
        text: 'CATS',
        path: '',
        icon: 'fluent:animal-cat-28-filled',
        submenu: [
            {
                id: 1,
                text: 'Food',
                path: '',
            },
            {
                id: 2,
                text: 'Toys',
                path: '',
            },
            {
                id: 3,
                text: 'Beds',
                path: '',
            },
            {
                id: 4,
                text: 'Cleaning & Waste Disposal',
                path: '',
            },
            {
                id: 5,
                text: 'Litter & Accessories',
                path: '',
            },
            {
                id: 6,
                text: 'Health & Wellness',
                path: '',
            },
        ],
    },
    {
        id: 11,
        type: 'navigation',
        text: 'FISH',
        path: '',
        icon: 'fa6-solid:fish-fins',
        submenu: [
            {
                id: 1,
                text: 'Aquarium & Decor',
                path: '',
            },
            {
                id: 2,
                text: 'Equipment',
                path: '',
            },
            {
                id: 3,
                text: 'Lighting',
                path: '',
            },
            {
                id: 4,
                text: 'Fish Food & Feeders',
                path: '',
            },
            {
                id: 5,
                text: 'Fish Health & Wellness',
                path: '',
            },
        ],
    },
    {
        id: 12,
        type: 'navigation',
        text: 'SMALL PETS',
        path: '',
        icon: 'mdi:rat',
        submenu: [
            {
                id: 1,
                text: 'Food & Treats',
                path: '',
            },
            {
                id: 2,
                text: 'Habits & Accessories',
                path: '',
            },
            {
                id: 3,
                text: 'Care & Health',
                path: '',
            },
            {
                id: 4,
                text: 'Closes & Accessories',
                path: '',
            },
        ],
    },
    {
        id: 13,
        type: 'navigation',
        text: 'REPTILES',
        path: '',
        icon: 'game-icons:gecko',
        submenu: [
            {
                id: 1,
                text: 'Food & Treats',
                path: '',
            },
            {
                id: 2,
                text: 'Habits & Accessories',
                path: '',
            },
            {
                id: 3,
                text: 'Care & Health',
                path: '',
            },
            {
                id: 4,
                text: 'Cleaning & Maintenance',
                path: '',
            },
        ],
    },
    {
        id: 14,
        type: 'navigation',
        text: 'BIRDS',
        path: '',
        icon: 'mingcute:bird-fill',
        submenu: [
            {
                id: 1,
                text: 'Food & Feeding',
                path: '',
            },
            {
                id: 2,
                text: 'Bird Cages & Accessories',
                path: '',
            },
            {
                id: 3,
                text: 'Toys & Perches',
                path: '',
            },
            {
                id: 4,
                text: 'Health & Grooming',
                path: '',
            },
            {
                id: 5,
                text: 'Wild Bird Food & Supplies',
                path: '',
            },
        ],
    },
]

export const dataMenu = {
    defaultNavigate: [{ name: '', icon: '#', path: '#' }],
    navigation: [
        {
            icon: 'streamline:pets-allowed-solid',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'DOGS',
            tag: 'dogs',
        },
        {
            icon: 'fluent:animal-cat-28-filled',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'CATS',
            tag: 'cats',
        },
        {
            icon: 'fa6-solid:fish-fins',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'FISH',
            tag: 'fish',
        },
        {
            icon: 'mdi:rat',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'SMALL PETS',
        },
        {
            icon: 'game-icons:gecko',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'REPTILES',
        },
        {
            icon: 'mingcute:bird-fill',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'BIRDS',
        },
        {
            icon: '#',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'HOME',
        },
        {
            icon: '#',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'SHOP',
        },
        {
            icon: '#',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'BLOG',
            tag: 'blog',
        },
        {
            icon: '#',
            iconNav: 'mingcute:right-fill',
            path: '#',
            name: 'PAGES',
        },
        {
            isHtml: true,
            html: <></>,
        },
    ],
}
export const dataMenuC2 = {
    dogs: {
        title: 'Dogs',
        list: [
            { iconNav: '#', name: 'GRID LAYOUT', tag: 'gird_layout' },
            { iconNav: '#', name: 'PRODUCT LAYOUT', tag: 'product_layout' },
            { iconNav: '#', name: 'PAGINATION', tag: 'pagination' },
        ],
    },
    cats: {
        title: 'Cats',
        list: [],
    },
    fish: {
        title: 'Dogs',
        list: [],
    },
    blog: {
        title: 'Blog',
        list: [
            {
                iconNav: 'mingcute:right-fill',
                name: 'PORT FORMAT',
                tag: 'port_format',
            },
            {
                iconNav: 'mingcute:right-fill',
                name: 'BLOG STYLE',
                tag: 'blog_style',
            },
        ],
    },
}
export const dataMenuC3 = {
    gird_layout: {
        title: 'Shop',
        list: [
            { iconNav: '#', name: 'GRID LAYOUT', path: '#' },
            { iconNav: '#', name: 'PRODUCT LAYOUT', path: '#' },
            { iconNav: '#', name: 'PAGINATION', path: '#' },
        ],
    },
    product_layout: {
        title: 'Dogs',
        list: [
            { iconNav: '#', name: 'PORT FORMAT', path: '#' },
            { iconNav: '#', name: 'BLOG STYLE', path: '#' },
        ],
    },
    port_format: {
        title: 'Blog',
        list: [
            { iconNav: '#', name: 'IMAGE', path: '#' },
            { iconNav: '#', name: 'GALLERY', path: '#' },
            { iconNav: '#', name: 'VIDEO', path: '#' },
        ],
    },
    blog_style: {
        title: 'Blog',
        list: [
            { iconNav: '#', name: 'GRID', path: '#' },
            { iconNav: '#', name: 'LIST', path: '#' },
        ],
    },
}
