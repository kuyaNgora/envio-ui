/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import {
  BroadcastOutline,
  GlobeOutline,
  HomeOutline,
  PriceTagOutline,
  SlidersOutline,
  TruckOutline,
} from "@envio-ui/icons";
import { Navbar } from "../../../components";

export default {
  title: "Components/Navigation/Navbar",
  component: Navbar,
  argTypes: {
    className: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    style: {
      table: {
        type: {
          summary: "CSSProperties",
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    brand: {
      table: {
        type: {
          summary: `image source`,
        },
      },
      defaultValue: {
        summary: "",
      },
    },
    brandClassName: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    brandStyle: {
      table: {
        type: {
          summary: "CSSProperties",
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    menu: {
      table: {
        type: {
          summary: "Menu[]",
          detail: `{
  label: string,
  icon: React.ReactComponent<any>,
  url: string,
  active: string,
  isDropdown: boolean,
  disabled: boolean,
  child: [
    {
      icon: React.ReactComponent<any>,
      label: string,
      desciption: string,
      url: string,
      active: string,
      disabled: boolean,
    }
  ]
}`,
        },
        defaultValue: { summary: "[]" },
      },
    },
    actions: {
      table: {
        type: {
          summary: `React.ReactNode`,
          detail: null,
        },
        defaultValue: { summary: "-" },
      },
    },
    theme: {
      table: {
        type: {
          summary: `light | dark`,
        },
      },
      defaultValue: {
        summary: "light",
      },
    },
  },
};

const menu = [
  {
    label: "Home",
    icon: HomeOutline,
    url: "/",
    active: "",
    isDropdown: true,
    child: [
      {
        icon: TruckOutline,
        label: "Envio digital logistik & supply chain enabler",
        url: "/",
        active: "",
      },
      {
        icon: GlobeOutline,
        label: "Supply chain management solution",
        url: "/",
        active: "",
      },
      {
        icon: BroadcastOutline,
        label: "Layanan transportasi",
        url: "/",
        active: "",
      },
      {
        icon: SlidersOutline,
        label: "Layanan pergudangan",
        url: "/",
        active: "",
      },
    ],
  },
  {
    label: "Product",
    icon: PriceTagOutline,
    url: "/product",
    active: "product",
    disabled: true,
  },
  {
    label: "Services",
    url: "/service",
    active: "service",
    isDropdown: true,
    child: [
      {
        icon: TruckOutline,
        label: "Envio digital logistik & supply chain enabler",
        desciption:
          "Platform logistik berbasis cloud yang dapat menampilkan proses rantai pasokan secara komprehensif dan real-time",
        url: "/",
        active: "",
      },
      {
        icon: GlobeOutline,
        label: "Supply chain management solution",
        desciption:
          "Membantu dalam mengelola rantai pasokan dari hulu ke hilir dengan tim expert di bidangnya",
        url: "/",
        active: "",
      },
      {
        icon: BroadcastOutline,
        label: "Layanan transportasi",
        desciption:
          "Kelola pemindahan produk dalam jumlah besar dari gudang ke gudang atau ke pelanggan dengan mudah, aman dan fleksibel.",
        url: "/",
        active: "",
      },
      {
        icon: SlidersOutline,
        label: "Layanan pergudangan",
        desciption:
          "Kelola stok, pengemasan dan pengiriman barang dengan mudah, aman dan fleksibel sesuai dengan kebutuhan perusahaan.",
        url: "/",
        active: "",
      },
    ],
  },
  {
    label: "About Us",
    url: "/about",
    active: "about",
  },
];

export const Example: React.FC = () => {
  return (
    <Navbar>
      {menu?.map((nav, id) => {
        if (nav?.isDropdown) {
          return (
            <Navbar.Dropdown
              key={`nav-${id}`}
              title={nav.label}
              icon={nav?.icon}
              disabled={nav?.disabled}
            >
              <Navbar.Content>
                {nav?.child?.map((child, idx) => (
                  <li key={idx}>
                    <Navbar.Nav title={child.label} icon={child?.icon} />
                  </li>
                ))}
              </Navbar.Content>
            </Navbar.Dropdown>
          );
        }

        return (
          <Navbar.Nav
            key={id}
            title={nav.label}
            icon={nav?.icon}
            disabled={nav?.disabled}
          />
        );
      })}
    </Navbar>
  );
};
