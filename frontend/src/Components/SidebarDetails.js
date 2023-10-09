import React from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';

export const SidebarDetails = [
    {
        title: "Finance",
        icon: <MonetizationOnIcon />,
        link: "/trans"
    },
    {
        title: "Supplier",
        icon: <LocalShippingIcon />,
        link: "/fin"
    },
    {
        title: "Order",
        icon: <ShoppingBagIcon />,
        link: "/trans"
    },
    {
        title: "Inventory",
        icon: <InventoryIcon />,
        link: "/trans"
    },
    {
        title: "Store",
        icon: <StoreIcon />,
        link: "/trans"
    },
]

